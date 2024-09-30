const About = () => {
  return (
    <div className="aboutBody">
      <div className="row">
        <img
          src="https://http.cat/100"
          alt="First"
          object-fit="cover"
          className="aboutImage"
        />
        <div className="aboutText">
          <h2>What/Why We Are Doing</h2>
          <p>
            We partner directly with restaurants that people struggle to get
            reservations at and allow them to list the top reservations for
            auction. The result - a guaranteed minimum spend on that prime
            reservation. We are providing a service for those individuals who
            couldn’t secure a reservation on the traditional platforms, and
            don’t want to see their money go to waste on one of the other
            platforms.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="aboutText">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            ante magna. Morbi elementum pretium malesuada. In quis laoreet
            justo. Donec tortor libero, sodales vitae nulla ut, eleifend
            efficitur nisl. Suspendisse potenti. Praesent sed sem ac lacus
            dignissim interdum. Donec posuere dolor vitae diam interdum, quis
            cursus justo bibendum. Fusce nisi turpis, volutpat non enim nec,
            scelerisque mattis ligula. Aenean egestas lorem arcu, id ultricies
            ligula ultrices et. Cras elementum lacus bibendum libero semper
            hendrerit.
          </p>
        </div>
        <img
          src="https://http.cat/404"
          alt="Second"
          object-fit="cover"
          className="aboutImage"
        />
      </div>
    </div>
  );
};

export default About;
