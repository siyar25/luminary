import GridMovie from '../../../Components/GridMovie/GridMovie'
import movieBG from "../../../assets/venom-movie-bg.jpg";

export default function ComingSoon() {
  return (
    <section className="coming-movies-section">
        <div className="subtitle">
          <div className="subtitle-text">Coming Soon</div>
        </div>
        <div className="section-line"></div>
        <div className="coming-movies-grid">
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Dunkirk"
            duration="118"
            genres={["ACTION", "drama"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Batman vs Superman"
            duration="125"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="John Wick 2"
            duration="116"
            genres={["ACTION", "Thriller"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Aquaman"
            duration="120"
            genres={["Adventure"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
          <GridMovie
            title="Venom"
            duration="120"
            genres={["ACTION"]}
            posterSrc={movieBG}
          />
        </div>
      </section>
  )
}
