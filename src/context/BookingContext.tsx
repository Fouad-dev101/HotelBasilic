import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type BookingContextValue = {
  preference: string;
  setPreference: (id: string) => void;
  requestRoom: (id: string) => void;
  clearPreference: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState('');

  const requestRoom = useCallback((id: string) => {
    setPreference(id);
    window.requestAnimationFrame(() => {
      document
        .getElementById('reservation')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const clearPreference = useCallback(() => setPreference(''), []);

  return (
    <BookingContext.Provider
      value={{ preference, setPreference, requestRoom, clearPreference }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
