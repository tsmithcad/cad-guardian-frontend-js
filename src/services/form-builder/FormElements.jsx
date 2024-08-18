import React from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  MenuItem,
  Slider,
  Rating,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
  FormLabel,
  InputLabel,
  Select,
  RadioGroup,
  Button,
  IconButton,
  Grid,
  Avatar,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FormElementWrapper from './FormElementWrapper';

// Basic text input field
export const TextFieldElement = () => (
  <FormElementWrapper defaultTitle="Text Field">
    <TextField placeholder="Enter text" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Checkbox input
export const CheckboxElement = () => (
  <FormElementWrapper defaultTitle="Checkbox">
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
  </FormElementWrapper>
);

// Radio button input
export const RadioElement = () => (
  <FormElementWrapper defaultTitle="Radio Buttons">
    <FormLabel component="legend">Options</FormLabel>
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
    </RadioGroup>
  </FormElementWrapper>
);

// Text area input
export const TextAreaElement = () => (
  <FormElementWrapper defaultTitle="Text Area">
    <TextField placeholder="Enter text" variant="outlined" fullWidth multiline rows={4} />
  </FormElementWrapper>
);

// Dropdown select input
export const SelectElement = () => (
  <FormElementWrapper defaultTitle="Dropdown">
    <InputLabel>Select an option</InputLabel>
    <Select variant="outlined" fullWidth>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
  </FormElementWrapper>
);

// Date picker input
export const DateElement = () => (
  <FormElementWrapper defaultTitle="Date Picker">
    <TextField type="date" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Time picker input
export const TimeElement = () => (
  <FormElementWrapper defaultTitle="Time Picker">
    <TextField type="time" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// File upload input
export const FileUploadElement = () => (
  <FormElementWrapper defaultTitle="File Upload">
    <TextField type="file" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Number input field
export const NumberElement = () => (
  <FormElementWrapper defaultTitle="Number Input">
    <TextField type="number" placeholder="Enter number" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Range input slider
export const RangeElement = () => (
  <FormElementWrapper defaultTitle="Range Input">
    <TextField type="range" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Switch toggle input
export const SwitchElement = () => (
  <FormElementWrapper defaultTitle="Switch">
    <FormControlLabel control={<Switch />} label="Toggle Option" />
  </FormElementWrapper>
);

// Slider input for numerical values
export const SliderElement = () => (
  <FormElementWrapper defaultTitle="Slider">
    <Slider defaultValue={30} aria-labelledby="continuous-slider" />
  </FormElementWrapper>
);

// Rating input for star ratings
export const RatingElement = () => (
  <FormElementWrapper defaultTitle="Rating">
    <Rating name="rating" defaultValue={2.5} precision={0.5} />
  </FormElementWrapper>
);

// Toggle buttons input
export const ToggleButtonElement = () => (
  <FormElementWrapper defaultTitle="Toggle Button">
    <ToggleButtonGroup color="primary" exclusive>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  </FormElementWrapper>
);

// Button input for form actions
export const ButtonElement = () => (
  <FormElementWrapper defaultTitle="Button">
    <Button variant="contained" color="primary">Submit</Button>
  </FormElementWrapper>
);

// Icon button input
export const IconButtonElement = () => (
  <FormElementWrapper defaultTitle="Icon Button">
    <IconButton color="primary">
      <AddPhotoAlternateIcon />
    </IconButton>
  </FormElementWrapper>
);

// Grid layout for organizing form elements
export const GridElement = () => (
  <FormElementWrapper defaultTitle="Grid Layout">
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField placeholder="First Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField placeholder="Last Name" variant="outlined" fullWidth />
      </Grid>
    </Grid>
  </FormElementWrapper>
);

// Avatar input for profile pictures
export const AvatarElement = () => (
  <FormElementWrapper defaultTitle="Avatar Upload">
    <Avatar alt="User Avatar" src="" sx={{ width: 56, height: 56 }} />
    <Button variant="contained" color="primary" component="label">
      Upload
      <input hidden accept="image/*" type="file" />
    </Button>
  </FormElementWrapper>
);

// Color picker input
export const ColorPickerElement = () => (
  <FormElementWrapper defaultTitle="Color Picker">
    <TextField type="color" defaultValue="#000000" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Password input field
export const PasswordElement = () => (
  <FormElementWrapper defaultTitle="Password Input">
    <TextField type="password" placeholder="Enter password" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Phone number input field
export const PhoneElement = () => (
  <FormElementWrapper defaultTitle="Phone Number">
    <TextField type="tel" placeholder="Enter phone number" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Email input field
export const EmailElement = () => (
  <FormElementWrapper defaultTitle="Email">
    <TextField type="email" placeholder="Enter email" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// URL input field
export const UrlElement = () => (
  <FormElementWrapper defaultTitle="URL">
    <TextField type="url" placeholder="Enter URL" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Signature pad input
export const SignaturePadElement = () => (
  <FormElementWrapper defaultTitle="Signature Pad">
    {/* Placeholder for a signature pad */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Signature Pad (placeholder)
    </div>
  </FormElementWrapper>
);

// Captcha input
export const CaptchaElement = () => (
  <FormElementWrapper defaultTitle="Captcha">
    {/* Placeholder for a captcha */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Captcha (placeholder)
    </div>
  </FormElementWrapper>
);

// Hidden field input
export const HiddenFieldElement = () => (
  <FormElementWrapper defaultTitle="Hidden Field">
    <TextField type="hidden" value="hidden value" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Currency input field
export const CurrencyElement = () => (
  <FormElementWrapper defaultTitle="Currency Input">
    <TextField type="text" placeholder="Enter amount" variant="outlined" fullWidth />
  </FormElementWrapper>
);

// Multi-select dropdown input
export const MultiSelectElement = () => (
  <FormElementWrapper defaultTitle="Multi-Select Dropdown">
    <InputLabel>Select options</InputLabel>
    <Select multiple variant="outlined" fullWidth>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
  </FormElementWrapper>
);

// Date & time range picker input
export const DateTimeRangeElement = () => (
  <FormElementWrapper defaultTitle="Date & Time Range Picker">
    {/* Placeholder for a date & time range picker */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Date & Time Range Picker (placeholder)
    </div>
  </FormElementWrapper>
);

// Image upload with preview input
export const ImageUploadElement = () => (
  <FormElementWrapper defaultTitle="Image Upload with Preview">
    {/* Placeholder for an image upload with preview */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Image Upload with Preview (placeholder)
    </div>
  </FormElementWrapper>
);

// Star rating input
export const StarRatingElement = () => (
  <FormElementWrapper defaultTitle="Star Rating">
    {/* Placeholder for a star rating system */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Star Rating (placeholder)
    </div>
  </FormElementWrapper>
);

// Range slider with dual handles input
export const DualHandleRangeSliderElement = () => (
  <FormElementWrapper defaultTitle="Dual Handle Range Slider">
    {/* Placeholder for a dual handle range slider */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Dual Handle Range Slider (placeholder)
    </div>
  </FormElementWrapper>
);

// Address/location picker input
export const LocationPickerElement = () => (
  <FormElementWrapper defaultTitle="Location Picker">
    {/* Placeholder for a location picker */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Location Picker (placeholder)
    </div>
  </FormElementWrapper>
);

// Autocomplete input field
export const AutocompleteElement = () => (
  <FormElementWrapper defaultTitle="Autocomplete Input">
    {/* Placeholder for an autocomplete input */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Autocomplete Input (placeholder)
    </div>
  </FormElementWrapper>
);

// Masked input fields (e.g., for phone numbers, credit cards)
export const MaskedInputElement = () => (
  <FormElementWrapper defaultTitle="Masked Input">
    {/* Placeholder for a masked input field */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Masked Input (placeholder)
    </div>
  </FormElementWrapper>
);

// Custom code block element
export const CustomCodeBlockElement = () => (
  <FormElementWrapper defaultTitle="Custom Code Block">
    {/* Placeholder for a custom code block */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Custom Code Block (placeholder)
    </div>
  </FormElementWrapper>
);

// Conditional logic element
export const ConditionalLogicElement = () => (
  <FormElementWrapper defaultTitle="Conditional Logic">
    {/* Placeholder for conditional logic */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Conditional Logic (placeholder)
    </div>
  </FormElementWrapper>
);

// Matrix/grid questions input
export const MatrixGridElement = () => (
  <FormElementWrapper defaultTitle="Matrix/Grid Questions">
    {/* Placeholder for matrix/grid questions */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Matrix/Grid Questions (placeholder)
    </div>
  </FormElementWrapper>
);

// Multi-file upload input
export const MultiFileUploadElement = () => (
  <FormElementWrapper defaultTitle="Multi-File Upload">
    {/* Placeholder for a multi-file upload input */}
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      Multi-File Upload (placeholder)
    </div>
  </FormElementWrapper>
);

export const formElementsMap = {
  text: TextFieldElement,
  checkbox: CheckboxElement,
  radio: RadioElement,
  textarea: TextAreaElement,
  select: SelectElement,
  date: DateElement,
  time: TimeElement,
  file: FileUploadElement,
  number: NumberElement,
  range: RangeElement,
  switch: SwitchElement,
  slider: SliderElement,
  rating: RatingElement,
  toggle: ToggleButtonElement,
  button: ButtonElement,
  iconButton: IconButtonElement,
  grid: GridElement,
  avatar: AvatarElement,
  colorPicker: ColorPickerElement,
  password: PasswordElement,
  phone: PhoneElement,
  email: EmailElement,
  url: UrlElement,
  signaturePad: SignaturePadElement,
  captcha: CaptchaElement,
  hidden: HiddenFieldElement,
  currency: CurrencyElement,
  multiSelect: MultiSelectElement,
  dateTimeRange: DateTimeRangeElement,
  imageUpload: ImageUploadElement,
  starRating: StarRatingElement,
  dualHandleRange: DualHandleRangeSliderElement,
  locationPicker: LocationPickerElement,
  autocomplete: AutocompleteElement,
  maskedInput: MaskedInputElement,
  customCodeBlock: CustomCodeBlockElement,
  conditionalLogic: ConditionalLogicElement,
  matrixGrid: MatrixGridElement,
  multiFileUpload: MultiFileUploadElement,
};