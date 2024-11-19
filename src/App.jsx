import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import logo from './Images/LHLogo.png';
import img1 from './Images/Kona.png';
import img2 from './Images/Daughter.png';
import img3 from './Images/Jai.png';
import img4 from './Images/Coral.png';
import img5 from './Images/Lager.png';
import img6 from './Images/Bud.png';
import img7 from './Images/Ultra.png';
import img8 from './Images/Stella.png';
import hockey from './Images/Hockey.png';
import img9 from './Images/18.png';
import img10 from './Images/19.png';
import img11 from './Images/20.png';
import img12 from './Images/21.png';
import img13 from './Images/22.png';
import img14 from './Images/23.png';
import img15 from './Images/24.png';
import img16 from './Images/25.png';
import img17 from './Images/26.png';
import img18 from './Images/27.png';
import img19 from './Images/28.png';
import backgroundImage from './Images/29.png';
import img30 from './Images/30.png';
import img31 from './Images/31.png';
import img32 from './Images/32.png';
import img33 from './Images/33.png';
import img34 from './Images/34.png';
import img35 from './Images/35.png';
import img36 from './Images/36.png';
import img37 from './Images/37.png';
import img38 from './Images/38.png';
import img39 from './Images/39.png';
import img40 from './Images/40.png';
import img41 from './Images/41.png';
import img42 from './Images/42.png';
import img43 from './Images/43.png';
import img44 from './Images/44.png';
import img45 from './Images/45.png';
import img46 from './Images/46.png';
import img47 from './Images/47.png';
import img48 from './Images/48.png';

function HomePage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '2em',
    width: '100%',
    backgroundColor: '#d6e8f7',
  };

  const textStyle = {
    margin: '0',
    padding: '0',
    textAlign: 'center'
  };

  const imageStyle = {
    marginTop: '5px',
    width: '90%',
    height: '40%',
  };

  // Updated to stack boxes vertically
  const boxContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stacks the steps vertically
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const boxStyle = {
    minHeight: '200px', // Adjust height as needed
    margin: '20px 0', // Adds space between each step
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const boxTextStyle = {
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    flex: '1',
  };

  const boxSubTextStyle = {
    fontSize: '0.8em',
    color: '#333',
    fontWeight: 'normal',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: 'gray',
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.0em',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>Get involved this hockey season</div>
      <img src={logo} alt="Logo" style={imageStyle} />
      
      <div style={boxContainerStyle}>
        <div style={boxStyle}>
          <div style={boxTextStyle}>
            Step 1: Vote for your Favorite Draft Beer<br /><br />
            <span style={boxSubTextStyle}>
              Browse the lineup of 6-8 unique beer options — each featuring different styles and flavors. Select your favorite beer(s) and submit your vote!
            </span>
          </div>
        </div>
        <div style={boxStyle}>
          <div style={boxTextStyle}>
            Step 2: Watch the Voting Leaderboard<br /><br />
            <span style={boxSubTextStyle}>
              Stay updated on how your favorites are performing. Check out the live leaderboard on our website to see which beers are leading the pack.
            </span>
          </div>
        </div>
        <div style={boxStyle}>
          <div style={boxTextStyle}>
            Step 3: Get Ready for the Announcement <br /><br />
            <span style={boxSubTextStyle}>
              Once voting ends, we’ll reveal the Starting Lineup of Draft Beers for game days!
            </span>
          </div>
        </div>
        <div style={boxStyle}>
          <div style={boxTextStyle}>
            Step 4: Try the Starting Lineup <br /><br />
            <span style={boxSubTextStyle}>
              Head to the bar and enjoy the Starting Lineup beer specials.
            </span>
          </div>
        </div>
        <div style={boxStyle}>
          <div style={boxTextStyle}>
            Step 5: Complete the Punch Card <br /><br />
            <span style={boxSubTextStyle}>
              Try every beer in the lineup to get your card fully stamped.
            </span>
          </div>
        </div>
      </div>

      <Link to="/voting">
        <button style={buttonStyle}>
          Click here to start voting
        </button>
      </Link>
    </div>
  );
}

function VotingPage() {
  const tshirt_images = [img33, img32, img30, img47, img31, img35, img48, img34, img46, img45, img44, img43, img42, img41, img40, img39, img38, img37, img36];
  const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    const handleImageSelection = (image) => {
      // Adds the selected image to the state
      setSelectedImages(prevImages => [...prevImages, image]);
    };

    const handleNextPage = () => {
      if (selectedBoxes.length === 6) {
        const selectedTitles = selectedBoxes.map(index => titles[index]);
        const selectedImages = selectedBoxes.map(index => tshirt_images[index]);
        navigate('/results', { state: { selectedTitles, selectedImages } });
      } else {
        setErrorMessage("You need to select up to 6 options.");
      }
    };
    
    
    const onBoxClick = (index) => {
      if (selectedBoxes.includes(index)) {
        // If already selected, remove the box from selectedBoxes
        setSelectedBoxes(selectedBoxes.filter((i) => i !== index));
        setErrorMessage('');
        
      } else if (selectedBoxes.length < 6) {
        // If not selected and less than 6 boxes are selected, add it to selectedBoxes
        setSelectedBoxes([...selectedBoxes, index]);
        setErrorMessage('');
      } else {
        // If trying to select more than 6, show an error message
        setErrorMessage("You can only select up to 6 options.");
      }
    };
  
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack content vertically
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '4vw',  // Use relative font size for better responsiveness
    maxWidth: '100%',  // Ensure the page width adapts to smaller screens
  };

  const titleStyle = {
    fontFamily: 'Anton, sans-serif',
    fontSize: '12vw',  // Adjust font size relative to viewport width
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  const subTitleStyle = {
    fontSize: '4vw',  // Adjust font size relative to viewport width
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '20px',
  };

  const imageContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const additionalImageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '500px', // Limit image width for larger screens
    objectFit: 'contain',  // Make sure image fits well inside the container
  };

  const boxListStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    overflowY: 'auto',
  };

  const boxStyle = (isSelected, color) => ({
    width: '90%',
    maxWidth: '430px',
    minHeight: '350px',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '10px',
    backgroundColor: color,
    borderRadius: '10px',
    border: isSelected ? '3px solid #00A4CCFF' : '2px solid black', 
    opacity: isSelected ? '0.8' : '1', 
    cursor: 'pointer',
  });
  

  const imageStyle = {
    width: '70%', // Constrain image width within iPhone dimensions
    height: 'auto',
    margin: '0 auto',
  };

  const optionTitleStyle = {
    fontFamily: 'Anton, sans-serif', // Apply the Anton font
    fontSize: '2.5em',  // Adjust the font size to make it larger
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px', // Space between title and description
  };
  

  const descriptionStyle = {
    fontSize: '1.5em',  // Adjust size for description text
    color: '#373d3b',  // Black color for the description text
    textAlign: 'center',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: 'gray',
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '2.0em',
  };

  // Array of images and background colors for each option
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];
  const colors = ['#d6e8f7', '#f0d6eb', '#b2bab0', '#bfb3ce', '#c3b6a8', '#c4c8e3', '#f2a8ac', '#f5ebcf', '#d7e1e9', '#eeedd3','#f2ddcf','#99bed1','#fdfad8', '#65ace2','#dedcd8','#d0cbb4','#efeeeb', '#ead7e9','#cad7a9'];

  // Array of dynamic titles for each option
  const titles = [
    "Big Wave", 
    "Raspberry Lemonade Cider", 
    "Jai Alai", 
    "Coral Head", 
    "Traditional Lager", 
    "Bud Light", 
    "Michelob ULTRA", 
    "Stella Artois",
    "Belgian White",
    "Postcard Pils",
    "Orange Blossom Pilsner",
    "Reef Donkey",
    "Mango Cart",
    "Floridian",
    "Modelo Especial",
    "Guinness Draught",
    "Juice Lord",
    "Luminescence Hazy IPA",
    "You're My Boy, Blue!"
  ];

  // Array of dynamic descriptions for each option
  const descriptions = [
    [
      "Blonde / Golden Ale", 
      "Ale - American", 
      "4.4% ABV • 21 IBU", 
      "• Kona Brewing Hawaii"
    ],
    [
      "Cider - Sweet", 
      "5.5% ABV • N/A IBU", 
      "• 3 Daughters Brewing"
    ],
    [
      "IPA - American", 
      "7.5% ABV • 70 IBU", 
      "• Cigar City Brewing"
    ],
    [
      "IPA - American", 
      "7.0% ABV • 75 IBU", 
      "• Tampa Bay Brewing Company"
    ],
    [
      "Lager - American", 
      "Amber / Red",
      "4.5% ABV • 12 IBU", 
      "• Yuengling Brewery"
    ],
    [
      "Lager - American", 
      "Light",
      "4.2% ABV • 6 IBU", 
      "• Anheuser-Busch"
    ],
    [
      "Lager - American", 
      "Light", 
      "4.2% ABV • 10 IBU", 
      "• Anheuser-Busch"
    ],
    [
      "Pilsner - Other", 
      "5.0% ABV • 24 IBU", 
      "• Stella Artois"
    ],
    [
      "Wheat Beer -",
      "Witbier / Blanche",
      "5.4% ABV • 9 IBU",
      "• Blue Moon Brewing Company"
    ],
    [
      "Pilsner - Other",
      "4.7% ABV • 35 IBU",
      "• Green Bench Brewing Co"
    ],
    [
      "Pilsner - Other",
      "5.5% ABV • 7 IBU",
      "• Orange Blossom Brewing Company"
    ],
    [
      "Pale Ale - American",
      "5.5% ABV • 36 IBU", 
      "• Tampa Bay Brewing Company"
    ],
    [
      "Wheat Beer - Fruited",
      "4% ABV • 10 IBU",
      "• Golden Road Brewing"
    ],
    [
      "Wheat Beer - Hefeweizen",
      "5.2% ABV • 12 IBU",
      "• Funky Buddha Brewery"
    ],
    [
      "Lager - Mexican",
      "4.5% ABV • 18 IBU",
      "• Grupo Modelo"
    ],
    [
      "Stout - Irish Dry",
      "4.2% ABV • 45 IBU",
      "• Guinness"
    ],
    [
      "IPA - New England / Hazy",
      "7.5% ABV • 45 IBU",
      "• Magnanimous Brewing"
    ],
    [
      "PA - New England / Hazy",
      "7% ABV • 30 IBU",
      "• Florida Avenue Brewing Co"
    ],
    [
      "Wheat Beer - Fruited",
      "5.3% ABV • 12 IBU",
      "• Florida Avenue Brewing Co."
    ]
  ];

  // Array of dynamic title colors for each option
  const titleColors = [
    '#0bafd3', '#ce7195', '#ba6812', '#6a257e', '#6f1a07', '#1b3a6c', '#242068', '#aa3635','#5f89b3', '#4b6a5b','#c76a24','#8c131b','#ac5429','#70272c', '#b24d51','#000000', '#dd8d34', '#7a2e87', '#23415e'
  ];

  return (
    <div>
      {/* Voting Page UI */}
      <div style={pageStyle}>
        <div style={titleStyle}>Pick your lineup</div>
        <div style={subTitleStyle}>(Choose up to 6 options)</div>
  
        <div style={imageContainerStyle}>
          <img src={hockey} alt="Hockey Stick" style={additionalImageStyle} />
        </div>
  
        <div style={boxListStyle}>
          {images.map((imageSrc, index) => {
            const isSelected = selectedBoxes.includes(index);
            return (
              <div
                key={index}
                style={boxStyle(isSelected, colors[index])}
                onClick={() => onBoxClick(index)}
              >
                <img src={imageSrc} alt={`Option ${index + 1}`} style={imageStyle} />
                <div style={{ ...optionTitleStyle, color: titleColors[index] }}>
                  {titles[index]}
                </div>
                <div style={descriptionStyle}>
                  {descriptions[index].map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            );
          })}
          <button 
            style={buttonStyle} 
            onClick={handleNextPage}
            disabled={selectedBoxes.length !== 6}>
            Click here to get your lineup!
          </button>
        </div>
  
        {errorMessage && (
          <div style={{ color: 'red', fontWeight: 'bold', marginTop: '10px', fontSize: '10vw' }}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};


function ResultsPage() {
  const triangleContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    justifyItems: 'center',
    alignItems: 'center',
    maxWidth: '400px',
    margin: 'auto',
    position: 'relative',
  };

  const imageStyles = [
    { gridColumn: '2 / 3' },  // Top image (centered)
    {  gridColumn: '1 / 2', 
      gridRow: '2', 
      transform: 'translateX(55px)',},  // Left middle image
      { 
        gridColumn: '3 / 4', 
        gridRow: '2', 
        transform: 'translateX(-55px)', // Move middle right image slightly to the left
    },// Right middle image
    { gridColumn: '1 / 2' },  // Bottom left image
    { gridColumn: '2 / 3' },  // Bottom center image
    { gridColumn: '3 / 4' },  // Bottom right image
];



  const imageStyle = {
    width: '100px',
    height: 'auto',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: 'gray',
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '2.0em',
  };

  const location = useLocation();
  const { selectedTitles, selectedImages } = location.state || {};
  
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack content vertically
    alignItems: 'center',
    padding: '20px',
    color: 'black',
    fontSize: '4vw',  // Use relative font size for better responsiveness
    maxWidth: '100%',  // Ensure the page width adapts to smaller screens
    backgroundColor: 'white',
  };

  const titleStyle = {
    fontFamily: 'Anton, sans-serif',
    fontSize: '10vw',  // Adjust font size relative to viewport width
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  const lineupBoxStyle = {
    backgroundColor: '#d6d5d3',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '100%',
    maxHeight: '60%',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Anton, sans-serif',
  };

  const lineupItemStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
  };

  const additionalImageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '500px', // Limit image width for larger screens
    objectFit: 'contain',  // Make sure image fits well inside the container
  };

  return (
    <div style={pageStyle}>
        <div style={titleStyle}>Current Starting Lineup</div>
    <div style={lineupBoxStyle}>
      {selectedTitles ? (
        <>
          <div style={lineupItemStyle}>Goalie: {selectedTitles[0]}</div>
          <div style={lineupItemStyle}>Left Defense: {selectedTitles[1]}</div>
          <div style={lineupItemStyle}>Right Defense: {selectedTitles[2]}</div>
          <div style={lineupItemStyle}>Left Wing: {selectedTitles[3]}</div>
          <div style={lineupItemStyle}>Center: {selectedTitles[4]}</div>
          <div style={lineupItemStyle}>Right Wing: {selectedTitles[5]}</div>
        </>
      ) : (
        <div style={lineupItemStyle}>No lineup selected.</div>
      )}
    </div>
    {selectedImages && selectedImages.length > 0 && (
        <div style={triangleContainerStyle}>
          {selectedImages.slice(0, 6).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ ...imageStyle, ...imageStyles[index] }}
            />
          ))}
        </div>
      )}
      <Link to="/end">
        <button style={buttonStyle}>
          Next
        </button>
      </Link>
    </div>
    
  );
}

function EndPage(){
  const pageStyle = {
    display: 'center',
    flexDirection: 'column', // Stack content vertically
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '3vw',  // Use relative font size for better responsiveness
    maxWidth: '100%',  // Ensure the page width adapts to smaller screens
  };

  const titleStyle = {
    fontFamily: 'Anton, sans-serif',
    fontSize: '10vw',  // Adjust font size relative to viewport width
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
        <div style={titleStyle}>Did your pick make it into the  lineup 
Find out the final picks 0/0/24
Share with your friends and stay updated through our instagram</div>
        </div>
        );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
}

export default App;
