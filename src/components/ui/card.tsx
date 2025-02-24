// src/components/ui/card.tsx
const Card = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ border: '1px solid #ccc', padding: '16px' }}>{children}</div>;
};

export default Card;
