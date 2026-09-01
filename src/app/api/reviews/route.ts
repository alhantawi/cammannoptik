import { NextResponse } from "next/server";
import { googleReviewsData } from "@/data/reviews";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // If Google Places API credentials are configured in .env, fetch live from Google
    if (apiKey && placeId) {
      const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&language=de&key=${apiKey}`;
      const res = await fetch(googleApiUrl, { next: { revalidate: 3600 } });

      if (res.ok) {
        const data = await res.json();
        if (data.result) {
          const liveReviews = (data.result.reviews || []).map((rev: any, index: number) => ({
            id: `google-live-${index}`,
            author: rev.author_name,
            role: "Verifizierter Google-Kunde",
            rating: rev.rating,
            date: rev.relative_time_description,
            highlight: rev.text.length > 60 ? `${rev.text.substring(0, 55)}...` : rev.text,
            text: rev.text,
            serviceUsed: "Meister-Beratung",
            verified: true,
            profilePhotoUrl: rev.profile_photo_url
          }));

          return NextResponse.json({
            averageRating: data.result.rating || googleReviewsData.averageRating,
            totalReviews: data.result.user_ratings_total || googleReviewsData.totalReviews,
            recommendationRate: "100%",
            badgeText: "Live Google Rezensionen",
            googleSearchUrl: "https://www.google.com/search?q=cammann+optik+hannover",
            writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
            reviews: liveReviews.length > 0 ? liveReviews : googleReviewsData.reviews,
            source: "google_places_api",
            lastUpdated: new Date().toISOString()
          });
        }
      }
    }

    // Default high-performance response with curated Google reviews
    return NextResponse.json({
      averageRating: googleReviewsData.averageRating,
      totalReviews: googleReviewsData.totalReviews,
      recommendationRate: googleReviewsData.recommendationRate,
      badgeText: googleReviewsData.badgeText,
      googleSearchUrl: "https://www.google.com/search?q=cammann+optik+hannover",
      writeReviewUrl: "https://www.google.com/search?q=cammann+optik+hannover#lrd=0x47b00b0000000000:0x0,3,,,",
      reviews: googleReviewsData.reviews,
      source: "cached_verified_reviews",
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error in /api/reviews:", error);
    return NextResponse.json(
      {
        averageRating: googleReviewsData.averageRating,
        totalReviews: googleReviewsData.totalReviews,
        recommendationRate: googleReviewsData.recommendationRate,
        reviews: googleReviewsData.reviews,
        source: "fallback",
        lastUpdated: new Date().toISOString()
      },
      { status: 200 }
    );
  }
}
