import { Box, Checkbox, Container, Fab, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Slider, TextField, Typography, withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState } from 'react' ;
import useStyles from "./SidebarLayoutStyles";

function Sidebar() {
        const classes = useStyles();
        const [state, setState] = useState(false);
        const [value, setValue] = useState();
        const handleChange = (event) => {
          setState({ ...state, [event.target.name]: event.target.checked });
        };
        const { neew, used, collectible , renewed , xs , s , m , l } = state;

        const PrettoSlider = withStyles({
            root: {
              color: '#0075FF',
              height: 8,
            },
            thumb: {
              height: 24,
              width: 24,
              backgroundColor: '#fff',
              border: '2px solid currentColor',
              marginTop: -8,
              marginLeft: -12,
              '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
              },
            },
            active: {},
            valueLabel: {
              left: 'calc(-50% + 4px)',
            },
            track: {
              height: 8,
              borderRadius: 4,
            },
            rail: {
              height: 8,
              borderRadius: 4,
            },
          })(Slider);
    return (
      <div>
          <Container>

                <Box mt={5} mb={5}>

                    <Typography component="legend" className = {classes.title}><b>Subcategories</b></Typography>
                    <Typography variant='h5 ' className={classes.tb}>RETURN TO <b>CLOTHING, SHOES, ACCESSORIES</b></Typography>
                    <Typography variant='h5 ' className={classes.tb}>DRESSES</Typography>
                    <Typography variant='h5 ' className={classes.tb}>TOPS,TEES and BLOUSES</Typography>
                    <Typography variant='h5 ' className={classes.tb}>SWEATERS</Typography>
                    <Typography variant='h5 ' className={classes.tb}>FASHION HOODIES and SWEATSHIRTS</Typography>
                    <Typography variant='h5 ' className={classes.tb}>JEANS</Typography>
                </Box> 
                <Box mt={5} mb={5}>
                    <Typography  component="legend" className = {classes.title}><b>Filters</b></Typography>
                    <Box component='div' display="flex" alignItems="center" justifyContent="between">
                        <TextField id="outlined-basic" label="Search" variant="outlined"/>
                        <Box ml={2}><i class="fas fa-search fa-lg" ></i></Box>
                    </Box>
                </Box>
                <Box mt={5} mb={5}>
                   <FormControl component="fieldset" >
                        <Typography component="legend"><b>Condition</b></Typography>
                            <FormGroup>
                                <FormControlLabel
                                control={<Checkbox checked={neew} onChange={handleChange} name="new" />}
                                label="NEW"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={used} onChange={handleChange} name="used" />}
                                label="USED"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={collectible} onChange={handleChange} name="collectible" />}
                                label="COLLECTIBLE"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={renewed} onChange={handleChange} name="renewed" />}
                                label="RENEWED"
                                />
                            </FormGroup>
                    </FormControl>
                </Box>
                <Box mt={5} mb={5}>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend" className = {classes.title}><b>Avg. Customer Review</b></Typography>
                        <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                    </Box>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                    </Box>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                    </Box>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                    </Box>
                </Box>
                <Box mt={5} mb={5}>
                    <FormControl>
                        <Typography component="legend" className = {classes.title}><b>Price</b></Typography>
                        <RadioGroup column aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel value="25" control={<Radio color="primary" />} label="UNDER $25" />
                            <FormControlLabel value="50" control={<Radio color="primary" />} label="$25 TO $50" />
                            <FormControlLabel value="100" control={<Radio color="primary" />} label="$50 TO $100" />
                            <FormControlLabel value="200" control={<Radio color="primary" />} label="$100 TO $200" />
                            <FormControlLabel value="200+" control={<Radio color="primary" />} label="$200 AND ABOVE" />
                        </RadioGroup>
                        <Box component='div' display="flex" alignItems="center" justifyContent="between">
                            <TextField id="outlined-basic" label="$ Min" variant="outlined"/>
                            <Typography mr={12} ml={12}> - </Typography>
                            <TextField id="outlined-basic" label="$ Max" variant="outlined" />
                        </Box>
                    </FormControl>
                </Box>
                <Box mt={5} mb={5}>
                    <Typography gutterBottom component="legend" className={classes.title}><b>Price</b></Typography>
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                </Box>
                <Box mt={5} mb={5}>
                   <FormControl component="fieldset" >
                        <Typography component="legend" className = {classes.title}><b>Size</b></Typography>
                            <FormGroup>
                                <FormControlLabel
                                control={<Checkbox checked={xs} onChange={handleChange} name="34" />}
                                label="34"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={s} onChange={handleChange} name="36" />}
                                label="36"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={m} onChange={handleChange} name="38" />}
                                label="38"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={l} onChange={handleChange} name="40" />}
                                label="40"
                                />
                            </FormGroup>
                    </FormControl>
                </Box>
                <Box>
                    <Typography component="legend" className = {classes.title}><b>Color</b></Typography>

                    <Fab size="medium" color="primary" >
                        
                    </Fab>
                    <Fab size="medium" color="secondary" >
                        
                    </Fab>
                    <Fab size="medium" color="transparent" >
                        
                    </Fab>
                    <Fab size="medium" color="primary"  >
                        
                    </Fab>
                    <Fab size="medium" color="secondary" >
                        
                    </Fab>
                    <Fab size="medium" color="transparent" >
                        
                    </Fab>
                    <Fab size="medium" color="primary"  >
                        
                    </Fab>                       
                   
                </Box>
            </Container>
      </div>
    );
  }
  
  export default Sidebar;
  