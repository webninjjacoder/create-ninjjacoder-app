import {
  Checkbox,
  CheckboxGroup,
  RadioButton,
  RadioButtonGroup,
  Search,
  Stack,
  TextArea,
  TextInput,
  PageLayout,
} from '@mskcc/carbon-react';

function App() {
  return (
    <PageLayout layout='sarge' className='msk-main-page-container'>
      <Stack gap={6}>
        <Search labelText='label text' />
        <TextInput id='text-input-id' labelText='label text' />
        <TextArea id='textarea-id' labelText='label text' />
        <CheckboxGroup legendText='group'>
          <Checkbox id='checkbox-id-1' labelText='Checkbox' />
          <Checkbox id='checkbox-id-2' labelText='Checkbox' />
        </CheckboxGroup>
        <RadioButtonGroup
          legendText='Group label'
          name='radio-button-group'
          defaultSelected='radio-1'
        >
          <RadioButton
            labelText='Radio button label'
            value='radio-1'
            id='radio-1'
          />
          <RadioButton
            labelText='Radio button label'
            value='radio-2'
            id='radio-2'
          />
          <RadioButton
            labelText='Radio button label'
            value='radio-3'
            id='radio-3'
            disabled
          />
        </RadioButtonGroup>
      </Stack>
    </PageLayout>
  );
}

export default App;
