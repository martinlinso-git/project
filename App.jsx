import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";

import {
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Pets as PetsIcon,
  LocationOn as LocationOnIcon,
  Close as CloseIcon,
  VolunteerActivism as VolunteerActivismIcon,
} from "@mui/icons-material";


/* =========================================================
   PET DATA
========================================================= */

const pets = [
  
  {
  name: "Snowy",
  type: "Baby Husky",
  age: "4 months",
  location: "Guntur",
  gender: "Female",
  image:
    "https://i.pinimg.com/736x/98/38/c2/9838c242d4cb79ccd265ef1c85015ab8.jpg",
},
{
  name: "Max",
  type: "Baby German Shepherd",
  age: "5 months",
  location: "Vijayawada",
  gender: "Male",
  image:
    "https://t4.ftcdn.net/jpg/21/04/76/51/360_F_2104765189_yMekNjtOmYgz09aUAoYMIsT3q7GPkvXH.jpg",
},
  {
    name: "Buddy",
    type: "golden retriever",
    age: "2 years",
    location: "Guntur",
    gender: "Male",
    image:
      "https://moderndogmagazine.com/wp-content/uploads/2002/12/ss_1717663609_Andy-Catterall-940x640.jpg",
  },
  {
    name: "Luna",
    type: "Cat",
    age: "1 year",
    location: "Vijayawada",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Milo",
    type: "Cat",
    age: "8 months",
    location: "Amaravati",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Coco",
    type: "Rabbit",
    age: "1 year",
    location: "Bengaluru",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Daisy",
    type: "Dog",
    age: "1.5 years",
    location: "Vijayawada",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Simba",
    type: "Cat",
    age: "2 years",
    location: "Hyderabad",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bruno",
    type: "Dog",
    age: "5 years",
    location: "Guntur",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bella",
    type: "Cat",
    age: "10 months",
    location: "Bengaluru",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Oreo",
    type: "Rabbit",
    age: "9 months",
    location: "Chennai",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Biscuit",
    type: "Hamster",
    age: "6 months",
    location: "Guntur",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Peanut",
    type: "Guinea Pig",
    age: "8 months",
    location: "Vijayawada",
    gender: "Female",
    image:
      "https://www.humanerescuealliance.org/assets/2439/51071784993_a43e2c1798_c.jpeg",
  },
  {
    name: "Kiwi",
    type: "macaw",
    age: "1 year",
    location: "Hyderabad",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Mochi",
    type: "Bunny",
    age: "7 months",
    location: "Amaravati",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Tiny",
    type: "Turtle",
    age: "2 years",
    location: "Chennai",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=700&q=80",
  },
];


/* =========================================================
   APP
========================================================= */

function App() {
  /* -----------------------------
     General States
  ----------------------------- */

  const [search, setSearch] = useState("");

  const [selectedPet, setSelectedPet] = useState(null);

  const [favorites, setFavorites] = useState([]);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });


  /* -----------------------------
     Adoption States
  ----------------------------- */

  const [adoptionOpen, setAdoptionOpen] = useState(false);

  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });


  /* -----------------------------
     About / Donate States
  ----------------------------- */

  const [aboutOpen, setAboutOpen] = useState(false);

  const [donateOpen, setDonateOpen] = useState(false);


  /* -----------------------------
     Payment States
  ----------------------------- */

  const [donationAmount, setDonationAmount] = useState("");

  const [paymentOpen, setPaymentOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");


  /* =========================================================
     FILTER PETS
  ========================================================= */

  const filteredPets = pets.filter((pet) => {
    const text = search.toLowerCase();

    return (
      pet.name.toLowerCase().includes(text) ||
      pet.type.toLowerCase().includes(text) ||
      pet.breed.toLowerCase().includes(text) ||
      pet.location.toLowerCase().includes(text)
    );
  });


  /* =========================================================
     SNACKBAR
  ========================================================= */

  const showMessage = (message, severity = "success") => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };


  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };


  /* =========================================================
     FAVORITES
  ========================================================= */

  const toggleFavorite = (pet) => {
    if (favorites.includes(pet.id)) {
      setFavorites(favorites.filter((id) => id !== pet.id));

      showMessage(`${pet.name} removed from favorites.`, "info");
    } else {
      setFavorites([...favorites, pet.id]);

      showMessage(`${pet.name} added to favorites!`, "success");
    }
  };


  /* =========================================================
     PET DETAILS
  ========================================================= */

  const handleViewPet = (pet) => {
    setSelectedPet(pet);
  };


  const handleClosePet = () => {
    setSelectedPet(null);
  };


  /* =========================================================
     ADOPTION
  ========================================================= */

  const handleOpenAdoption = (pet) => {
    setSelectedPet(pet);
    setAdoptionOpen(true);
  };


  const handleCloseAdoption = () => {
    setAdoptionOpen(false);

    setApplication({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };


  const handleApplicationChange = (event) => {
    setApplication({
      ...application,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmitApplication = () => {
    if (
      !application.name ||
      !application.email ||
      !application.phone ||
      !application.city
    ) {
      showMessage("Please fill all required fields.", "error");
      return;
    }

    showMessage(
      `Application submitted successfully for ${selectedPet.name}!`,
      "success"
    );

    handleCloseAdoption();
  };


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  /* =========================================================
     DONATION - STEP 1
  ========================================================= */

  const handleContinueToPayment = () => {
    const amount = Number(donationAmount);

    if (!amount || amount <= 0) {
      showMessage("Please enter a valid donation amount.", "error");
      return;
    }

    if (amount < 1) {
      showMessage("Donation amount should be at least ₹1.", "error");
      return;
    }

    setDonateOpen(false);
    setPaymentOpen(true);
  };


  /* =========================================================
     RAZORPAY PAYMENT - STEP 2
  ========================================================= */

  const handlePayment = () => {
    const amount = Number(donationAmount);

    if (!amount || amount <= 0) {
      showMessage("Please enter a valid donation amount.", "error");
      return;
    }

    if (!paymentMethod) {
      showMessage("Please select a payment method.", "error");
      return;
    }

    if (!window.Razorpay) {
      showMessage(
        "Payment gateway is not loaded. Please refresh the page.",
        "error"
      );

      return;
    }


    /*
      IMPORTANT:

      Replace this with your Razorpay TEST KEY ID.

      Example:

      key: "rzp_test_XXXXXXXXXXXXXX"

      NEVER put your Razorpay SECRET KEY here.
    */

    const options = {
      key: "rzp_test_YOUR_KEY_ID",

      amount: amount * 100,

      currency: "INR",

      name: "PawFind",

      description: "Donation for Pet Adoption",

      image:
        "https://cdn-icons-png.flaticon.com/512/616/616408.png",

      handler: function (response) {
        showMessage(
          `Donation successful! Payment ID: ${response.razorpay_payment_id}`,
          "success"
        );

        setPaymentOpen(false);

        setDonationAmount("");

        setPaymentMethod("");
      },

      prefill: {
        name: "",
        email: "",
        contact: "",
      },

      notes: {
        purpose: "PawFind Pet Adoption Donation",
      },

      theme: {
        color: "#e17d4c",
      },

      modal: {
        ondismiss: function () {
          console.log("Payment window closed.");
        },
      },
    };


    const razorpay = new window.Razorpay(options);


    razorpay.on("payment.failed", function (response) {
      showMessage(
        response.error?.description ||
          "Payment failed. Please try again.",
        "error"
      );
    });


    razorpay.open();
  };


  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <Box className="app">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <AppBar
        position="sticky"
        className="navbar"
      >
        <Toolbar className="navbar-toolbar">

          <Box
            className="logo-area"
            onClick={() => scrollToSection("home")}
          >
            <PetsIcon className="logo-icon" />

            <Typography
              variant="h5"
              className="logo-text"
            >
              PawFind
            </Typography>
          </Box>


          <Box className="nav-buttons">

            <Button
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>

            <Button
              onClick={() => scrollToSection("adopt")}
            >
              Adopt
            </Button>

            <Button
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </Button>

            <Button
              onClick={() => setAboutOpen(true)}
            >
              About Us
            </Button>

            <Button
              className="donate-nav-button"
              startIcon={<VolunteerActivismIcon />}
              onClick={() => setDonateOpen(true)}
            >
              Donate
            </Button>

          </Box>

        </Toolbar>
      </AppBar>



      {/* =====================================================
          HERO
      ===================================================== */}

      <Box
        id="home"
        className="hero-section"
      >

        <Container>

          <Grid
            container
            spacing={4}
            alignItems="center"
          >

            <Grid size={{ xs: 12, md: 7 }}>

              <Chip
                icon={<PetsIcon />}
                label="Find Your New Best Friend"
                className="hero-chip"
              />

              <Typography
                variant="h1"
                className="hero-title"
              >
                Give a Pet a
                <br />
                <span>Forever Home</span>
              </Typography>

              <Typography
                className="hero-description"
              >
                Discover loving pets waiting for a family.
                Search, connect and start your adoption journey
                with PawFind.
              </Typography>

              <Box className="hero-buttons">

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection("adopt")}
                  className="primary-button"
                >
                  Find a Pet
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() =>
                    scrollToSection("how-it-works")
                  }
                  className="secondary-button"
                >
                  Learn More
                </Button>

              </Box>

            </Grid>


            <Grid size={{ xs: 12, md: 5 }}>

              <Box className="hero-image-container">

                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80"
                  alt="Happy pets"
                  className="hero-image"
                />

              </Box>

            </Grid>

          </Grid>

        </Container>

      </Box>



      {/* =====================================================
          ADOPT SECTION
      ===================================================== */}

      <Container
        id="adopt"
        className="pets-section"
      >

        <Box className="section-heading">

          <Typography
            variant="h3"
            className="section-title"
          >
            Find Your Perfect Companion
          </Typography>

          <Typography
            className="section-subtitle"
          >
            Search our available pets and find the one
            that's right for you.
          </Typography>

        </Box>


        {/* SEARCH */}

        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, type, breed or location..."
          className="search-box"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />


        {/* PET CARDS */}

        <Grid
          container
          spacing={3}
          className="pets-grid"
        >

          {filteredPets.length > 0 ? (

            filteredPets.map((pet) => (

              <Grid
                key={pet.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >

                <Card className="pet-card">

                  <Box className="pet-image-wrapper">

                    <CardMedia
                      component="img"
                      image={pet.image}
                      alt={pet.name}
                      className="pet-image"
                    />

                    <IconButton
                      className="favorite-button"
                      onClick={() =>
                        toggleFavorite(pet)
                      }
                    >

                      {favorites.includes(pet.id) ? (
                        <FavoriteIcon className="favorite-active" />
                      ) : (
                        <FavoriteBorderIcon />
                      )}

                    </IconButton>

                  </Box>


                  <CardContent>

                    <Typography
                      variant="h5"
                      className="pet-name"
                    >
                      {pet.name}
                    </Typography>

                    <Typography
                      className="pet-breed"
                    >
                      {pet.breed}
                    </Typography>


                    <Box className="pet-info">

                      <Chip
                        label={pet.type}
                        size="small"
                      />

                      <Chip
                        label={pet.age}
                        size="small"
                      />

                    </Box>


                    <Box className="pet-location">

                      <LocationOnIcon fontSize="small" />

                      <Typography variant="body2">
                        {pet.location}
                      </Typography>

                    </Box>

                  </CardContent>


                  <CardActions className="pet-actions">

                    <Button
                      onClick={() =>
                        handleViewPet(pet)
                      }
                    >
                      View Pet
                    </Button>

                    <Button
                      variant="contained"
                      className="adopt-button"
                      onClick={() =>
                        handleOpenAdoption(pet)
                      }
                    >
                      Adopt
                    </Button>

                  </CardActions>

                </Card>

              </Grid>

            ))

          ) : (

            <Grid size={12}>

              <Paper className="no-results">

                <PetsIcon />

                <Typography variant="h6">
                  No pets found
                </Typography>

                <Typography>
                  Try another search.
                </Typography>

              </Paper>

            </Grid>

          )}

        </Grid>

      </Container>



      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <Box
        id="how-it-works"
        className="how-section"
      >

        <Container>

          <Box className="section-heading">

            <Typography
              variant="h3"
              className="section-title"
            >
              How Adoption Works
            </Typography>

            <Typography
              className="section-subtitle"
            >
              Adopting a pet with PawFind is simple.
            </Typography>

          </Box>


          <Grid
            container
            spacing={3}
          >

            {[
              {
                number: "01",
                title: "Find",
                text: "Search for pets available for adoption.",
              },
              {
                number: "02",
                title: "View",
                text: "Check the pet's complete information.",
              },
              {
                number: "03",
                title: "Choose",
                text: "Save your favorite pets.",
              },
              {
                number: "04",
                title: "Apply",
                text: "Fill out the adoption application.",
              },
            ].map((step) => (

              <Grid
                key={step.number}
                size={{ xs: 12, sm: 6, md: 3 }}
              >

                <Paper className="step-card">

                  <Box className="step-number">
                    {step.number}
                  </Box>

                  <Typography
                    variant="h5"
                    className="step-title"
                  >
                    {step.title}
                  </Typography>

                  <Typography>
                    {step.text}
                  </Typography>

                </Paper>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box className="footer">

        <Container>

          <Grid
            container
            spacing={4}
          >

            <Grid size={{ xs: 12, md: 5 }}>

              <Box className="footer-logo">

                <PetsIcon />

                <Typography variant="h5">
                  PawFind
                </Typography>

              </Box>

              <Typography>
                Helping pets find loving forever homes.
              </Typography>

            </Grid>


            <Grid size={{ xs: 12, md: 3 }}>

              <Typography
                variant="h6"
                className="footer-heading"
              >
                Quick Links
              </Typography>

              <Button
                onClick={() =>
                  scrollToSection("home")
                }
              >
                Home
              </Button>

              <Button
                onClick={() =>
                  scrollToSection("adopt")
                }
              >
                Adopt
              </Button>

              <Button
                onClick={() =>
                  scrollToSection("how-it-works")
                }
              >
                How It Works
              </Button>

            </Grid>


            <Grid size={{ xs: 12, md: 4 }}>

              <Typography
                variant="h6"
                className="footer-heading"
              >
                Support PawFind
              </Typography>

              <Typography>
                Your support helps animals get the care
                they need.
              </Typography>

              <Button
                variant="contained"
                startIcon={<VolunteerActivismIcon />}
                className="footer-donate-button"
                onClick={() => setDonateOpen(true)}
              >
                Donate Now
              </Button>

            </Grid>

          </Grid>


          <Divider className="footer-divider" />

          <Typography
            className="copyright"
          >
            © 2026 PawFind. Pet Adoption Website.
          </Typography>

        </Container>

      </Box>



      {/* =====================================================
          PET DETAILS DIALOG
      ===================================================== */}

      <Dialog
        open={Boolean(selectedPet) && !adoptionOpen}
        onClose={handleClosePet}
        maxWidth="md"
        fullWidth
      >

        {selectedPet && (

          <>

            <DialogTitle>

              <Box className="dialog-title-row">

                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
                  Meet {selectedPet.name}
                </Typography>

                <IconButton
                  onClick={handleClosePet}
                >
                  <CloseIcon />
                </IconButton>

              </Box>

            </DialogTitle>


            <DialogContent>

              <Grid
                container
                spacing={3}
              >

                <Grid size={{ xs: 12, md: 5 }}>

                  <img
                    src={selectedPet.image}
                    alt={selectedPet.name}
                    className="dialog-pet-image"
                  />

                </Grid>


                <Grid size={{ xs: 12, md: 7 }}>

                  <Typography
                    variant="h4"
                    className="dialog-pet-name"
                  >
                    {selectedPet.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {selectedPet.breed}
                  </Typography>


                  <Box className="details-grid">

                    <Box>
                      <strong>Type:</strong>
                      <br />
                      {selectedPet.type}
                    </Box>

                    <Box>
                      <strong>Age:</strong>
                      <br />
                      {selectedPet.age}
                    </Box>

                    <Box>
                      <strong>Gender:</strong>
                      <br />
                      {selectedPet.gender}
                    </Box>

                    <Box>
                      <strong>Location:</strong>
                      <br />
                      {selectedPet.location}
                    </Box>

                    <Box>
                      <strong>Vaccination:</strong>
                      <br />
                      {selectedPet.vaccination}
                    </Box>

                    <Box>
                      <strong>Temperament:</strong>
                      <br />
                      {selectedPet.temperament}
                    </Box>

                  </Box>


                  <Typography
                    sx={{ mt: 3 }}
                  >
                    {selectedPet.description}
                  </Typography>

                </Grid>

              </Grid>

            </DialogContent>


            <DialogActions sx={{ p: 3 }}>

              <Button
                onClick={() =>
                  toggleFavorite(selectedPet)
                }
                startIcon={
                  favorites.includes(selectedPet.id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )
                }
              >
                {favorites.includes(selectedPet.id)
                  ? "Remove Favorite"
                  : "Add Favorite"}
              </Button>

              <Button
                variant="contained"
                className="adopt-button"
                onClick={() =>
                  handleOpenAdoption(selectedPet)
                }
              >
                Adopt {selectedPet.name}
              </Button>

            </DialogActions>

          </>

        )}

      </Dialog>



      {/* =====================================================
          ADOPTION APPLICATION DIALOG
      ===================================================== */}

      <Dialog
        open={adoptionOpen}
        onClose={handleCloseAdoption}
        maxWidth="sm"
        fullWidth
      >

        <DialogTitle>

          <Box className="dialog-title-row">

            <Box>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                Adoption Application
              </Typography>

              {selectedPet && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Applying for: {selectedPet.name}
                </Typography>
              )}

            </Box>

            <IconButton
              onClick={handleCloseAdoption}
            >
              <CloseIcon />
            </IconButton>

          </Box>

        </DialogTitle>


        <DialogContent>

          <TextField
            fullWidth
            required
            label="Full Name"
            name="name"
            value={application.name}
            onChange={handleApplicationChange}
            margin="normal"
          />

          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            value={application.email}
            onChange={handleApplicationChange}
            margin="normal"
          />

          <TextField
            fullWidth
            required
            label="Phone Number"
            name="phone"
            value={application.phone}
            onChange={handleApplicationChange}
            margin="normal"
          />

          <TextField
            fullWidth
            required
            label="City"
            name="city"
            value={application.city}
            onChange={handleApplicationChange}
            margin="normal"
          />

        </DialogContent>


        <DialogActions sx={{ p: 3 }}>

          <Button
            onClick={handleCloseAdoption}
            color="inherit"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            className="adopt-button"
            onClick={handleSubmitApplication}
          >
            Submit Application
          </Button>

        </DialogActions>

      </Dialog>



      {/* =====================================================
          ABOUT US DIALOG
      ===================================================== */}

      <Dialog
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
        maxWidth="sm"
        fullWidth
      >

        <DialogTitle>

          <Box className="dialog-title-row">

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              About PawFind
            </Typography>

            <IconButton
              onClick={() => setAboutOpen(false)}
            >
              <CloseIcon />
            </IconButton>

          </Box>

        </DialogTitle>


        <DialogContent>

          <Box className="about-icon">
            <PetsIcon />
          </Box>

          <Typography
            variant="h6"
            sx={{ mb: 1 }}
          >
            Our Mission
          </Typography>

          <Typography
            color="text.secondary"
          >
            PawFind is a pet adoption platform designed
            to make it easier for people to discover pets
            that are looking for loving homes.
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Our website provides pet search, detailed pet
            information, favorites and adoption applications
            in one simple interface.
          </Typography>

        </DialogContent>


        <DialogActions sx={{ p: 3 }}>

          <Button
            variant="contained"
            onClick={() => setAboutOpen(false)}
            className="primary-button"
          >
            Close
          </Button>

        </DialogActions>

      </Dialog>



      {/* =====================================================
          DONATE DIALOG - STEP 1
      ===================================================== */}

      <Dialog
        open={donateOpen}
        onClose={() => setDonateOpen(false)}
        maxWidth="sm"
        fullWidth
      >

        <DialogTitle>

          <Box className="dialog-title-row">

            <Box>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                Support PawFind ❤️
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Help us care for animals in need.
              </Typography>

            </Box>

            <IconButton
              onClick={() => setDonateOpen(false)}
            >
              <CloseIcon />
            </IconButton>

          </Box>

        </DialogTitle>


        <DialogContent>

          <Typography
            sx={{
              mb: 3,
              color: "text.secondary",
            }}
          >
            Your donation helps support animals and gives
            them a better chance of finding a loving home.
          </Typography>


          <TextField
            fullWidth
            label="Donation Amount"
            type="number"
            value={donationAmount}
            onChange={(e) =>
              setDonationAmount(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  ₹
                </InputAdornment>
              ),
            }}
            inputProps={{
              min: 1,
            }}
          />


          <Typography
            sx={{
              mt: 3,
              mb: 1,
              fontWeight: 600,
            }}
          >
            Quick Amount
          </Typography>


          <Box className="donation-chips">

            {[100, 250, 500, 1000].map(
              (amount) => (

                <Chip
                  key={amount}
                  label={`₹${amount}`}
                  onClick={() =>
                    setDonationAmount(amount)
                  }
                  clickable
                  className="donation-chip"
                />

              )
            )}

          </Box>

        </DialogContent>


        <DialogActions sx={{ p: 3 }}>

          <Button
            onClick={() => setDonateOpen(false)}
            color="inherit"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            startIcon={<VolunteerActivismIcon />}
            onClick={handleContinueToPayment}
            className="primary-button"
          >
            Continue to Payment
          </Button>

        </DialogActions>

      </Dialog>



      {/* =====================================================
          PAYMENT DIALOG - STEP 2
      ===================================================== */}

      <Dialog
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        maxWidth="sm"
        fullWidth
      >

        <DialogTitle>

          <Box className="dialog-title-row">

            <Box>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                Choose Payment Method
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Donation Amount: ₹{donationAmount}
              </Typography>

            </Box>

            <IconButton
              onClick={() => setPaymentOpen(false)}
            >
              <CloseIcon />
            </IconButton>

          </Box>

        </DialogTitle>


        <DialogContent>

          <Typography
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            Select how you want to pay
          </Typography>


          {/* UPI */}

          <Paper
            onClick={() =>
              setPaymentMethod("upi")
            }
            className={`payment-option ${
              paymentMethod === "upi"
                ? "payment-selected"
                : ""
            }`}
          >

            <Box className="payment-icon">
              📱
            </Box>

            <Box>

              <Typography fontWeight="bold">
                UPI
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Google Pay • PhonePe • Other UPI Apps
              </Typography>

            </Box>

          </Paper>


          {/* CARD */}

          <Paper
            onClick={() =>
              setPaymentMethod("card")
            }
            className={`payment-option ${
              paymentMethod === "card"
                ? "payment-selected"
                : ""
            }`}
          >

            <Box className="payment-icon">
              💳
            </Box>

            <Box>

              <Typography fontWeight="bold">
                Credit / Debit Card
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Visa • Mastercard • RuPay
              </Typography>

            </Box>

          </Paper>


          {/* SELECTED PAYMENT */}

          {paymentMethod && (

            <Box className="selected-payment">

              <Typography fontWeight="bold">
                Selected Payment
              </Typography>

              <Typography color="text.secondary">

                {paymentMethod === "upi"
                  ? "UPI - Google Pay / PhonePe / Other UPI"
                  : "Credit / Debit Card"}

              </Typography>

            </Box>

          )}


          <Typography
            variant="caption"
            color="text.secondary"
            className="secure-payment-text"
          >
            🔒 Payments are securely processed through
            Razorpay. PawFind does not store your card
            details.
          </Typography>

        </DialogContent>


        <DialogActions sx={{ p: 3 }}>

          <Button
            onClick={() => {
              setPaymentOpen(false);
              setDonateOpen(true);
            }}
            color="inherit"
          >
            Back
          </Button>


          <Button
            variant="contained"
            disabled={!paymentMethod}
            onClick={handlePayment}
            className="primary-button"
          >
            Pay ₹{donationAmount}
          </Button>

        </DialogActions>

      </Dialog>



      {/* =====================================================
          SNACKBAR
      ===================================================== */}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >

        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>

      </Snackbar>

    </Box>
  );
}


export default App;