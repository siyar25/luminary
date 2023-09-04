import "./Seat.css";

export default function Seat({ id, toggle, selectedSeats, reservedSeats }) {
  return (
    <div
      className="seat"
      style={{
        backgroundColor: selectedSeats.includes(id)
          ? "var(--vivid-gold)"
          : reservedSeats.includes(id)
          ? "red"
          : "gray",
          cursor: reservedSeats.includes(id) ? "not-allowed" : "pointer"
      }}
      onClick={(e) => toggle(id)}
      title={reservedSeats.includes(id) ? "This seat is taken" : null}
    >
      {id}
    </div>
  );
}
