"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppointmentContextType {
  isOpen: boolean;
  selectedServiceId: string | null;
  openBooking: (serviceId?: string) => void;
  closeBooking: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const openBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        isOpen,
        selectedServiceId,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
