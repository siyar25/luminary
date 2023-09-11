import "./BookingPage.css";
import movies from "../../assets/movies.json";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import stars from "../../assets/stars.png";
import Seat from "../../Components/Seat/Seat";
import "../HomePage/ComingMovies/ComingMovies.css";
import Loading from "../../Components/Loading/Loading";

export default function BookingPage() {
  let { id } = useParams();
  const { pathname } = useLocation();
  const [queries] = useSearchParams();
  const [movie, setMovie] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [email, setEmail] = useState();
  const seats = Array.from(Array(25).keys());
  const [reservations, setReservations] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData();
  }, [pathname]);

  function findMovie() {
    let findMovie = movies.comingSoon.find((movie) => movie.imdbID === id);
    findMovie === undefined
      ? (findMovie = movies.opening.find((movie) => movie.imdbID === id))
      : null;

    return findMovie;
  }

  async function fetchReservations(movieId, date, time, type) {
    const res = await fetch(`/api/reservation/${movieId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieDate: date,
        movieTime: time,
        movieType: type,
      }),
    });

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    const date = queries.get("date");
    const time = queries.get("time");
    const type = queries.get("type");
    const movie = findMovie();
    const reservations = await fetchReservations(
      movie?.imdbID,
      date,
      time,
      type
    );
    setMovie(movie);
    setReservations(reservations);
    setIsLoading(false);
  }

  useEffect(() => {
    if (reservations.length > 0) {
      setReservedSeats(reservations.flatMap((seat) => seat.seatIds));
    }
  }, [reservations]);

  function toggleSeat(id) {
    if (reservedSeats.includes(id)) return;

    selectedSeats.includes(id)
      ? setSelectedSeats((prev) => prev.filter((seat) => seat !== id))
      : setSelectedSeats((prev) => [...prev, id]);
  }

  function calculateTotal() {
    return selectedSeats.length * 10;
  }

  async function sendPayment() {
    if (email.length < 1) {
      return;
    }

    await fetch(`/api/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId: movie?.imdbID,
        movieTime: queries.get("time"),
        movieDate: queries.get("date"),
        movieType: queries.get("type"),
        email: email,
        seatIds: selectedSeats,
      }),
    });
    setSelectedSeats([]);
    setEmail("");
    fetchData();
  }

  return isLoading ? (
    <Loading />
  ) : movie && reservations && reservedSeats ? (
    <div className="booking-page">
      <img
        alt="Stars in the dark sky"
        src={stars}
        className="cover-image"
        style={{ height: "50vh" }}
      />

      <div className="booking-page-sections">
        <section className="left-section">
          <img
            src={movie?.Poster}
            alt={`Poster of ${movie?.Title}`}
            className="top-photo"
          />
          <div className="reserved-seats">
            {selectedSeats.map((seat) => {
              return (
                <div className="reserved-seat" key={seat}>
                  <div className="seat-id">
                    Seat <b>{seat}</b>
                  </div>
                  <div className="seat-info">
                    <div className="seat-price">$10</div>
                    <div
                      className="seat-cancel"
                      onClick={() => toggleSeat(seat)}
                    >
                      X
                    </div>
                  </div>
                </div>
              );
            })}

            {selectedSeats.length > 0 ? (
              <>
                <div className="seats-total">
                  <div className="total-text">Total: </div>
                  <div className="total-price">${calculateTotal()}</div>
                </div>
                <div className="seats-payment">
                  <div
                    className="payment-cancel payment-btn"
                    onClick={() => {
                      setSelectedSeats([]);
                      setIsLocked(false);
                    }}
                  >
                    Cancel
                  </div>
                  {!isLocked ? (
                    <div
                      className="payment-pay payment-btn"
                      onClick={() => setIsLocked(true)}
                    >
                      Continue
                    </div>
                  ) : (
                    <div
                      className="payment-final payment-btn"
                      onClick={() => {
                        setIsLocked(false);
                        if (email.length !== 0) {
                          sendPayment();
                        }
                      }}
                    >
                      Pay
                    </div>
                  )}
                </div>
                {isLocked ? (
                  <form>
                    <input
                      type="email"
                      className="payment-email opening-week-search"
                      placeholder="E-mail..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </form>
                ) : (
                  ""
                )}
              </>
            ) : null}
          </div>
        </section>
        <section className="right-section">
          <div className="movie-title">{movie?.Title}</div>
          <div className="section-line"></div>
          <div className="right-bottom-section">
            <div className="right-bottom-top-section"></div>
            <div className="right-bottom-bottom-section">
              <div className="seats-section">
                <div className="movie-screen"></div>
                <div className="seats">
                  {seats.map((seat) => {
                    return (
                      <Seat
                        toggle={toggleSeat}
                        id={seat + 1}
                        key={seat}
                        selectedSeats={selectedSeats}
                        reservedSeats={reservedSeats}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="date-section">
                <div className="date">
                  <div className="date-section-text">Date:</div>
                  <div className="date-block">
                    <span style={{ fontSize: "4rem" }}>
                      {queries.get("date").split(" ")[1]}
                    </span>
                    <br /> {queries.get("date").split(" ")[0]}
                  </div>
                </div>
                <div className="time">
                  <div className="date-section-text">Time:</div>
                  <div className="date-block">{queries.get("time")}</div>
                </div>
                <div className="date-section-movie-type">
                  <div className="date-section-text">Type:</div>
                  <div className="date-block">
                    {queries.get("type").replaceAll("_", " ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
