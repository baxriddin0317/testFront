import React from 'react'
import "./Main.scss";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Details from '../Details/Details';
import { useNavigate } from 'react-router-dom';

const steps = ['Данные для входа', 'Личная информация', 'Представители'];

function Main() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const navigate = useNavigate();
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = (e) => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      if(activeStep === steps.length-1){
        navigate("/profil");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);

      console.log(e.target.value);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep=0);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} style={{marginBottom: 29}}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
                
            return (
              <Step key={label} {...stepProps} >
                <StepLabel {...labelProps} sx={{ display: 'flex', flexDirection: 'column' }}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

          <React.Fragment>
            
            <Details activeStep={activeStep + 1} />
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}> 
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                </Button>
                )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>              
              <Button onClick={handleNext} className="button">
                {activeStep === steps.length - 1 ? 'Зарегистрироваться' : 'Далее'}
              </Button>
            </Box>
          </React.Fragment>
      </Box>
    );
}

export default Main