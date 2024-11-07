# CS:GO Dynamic Config Generator

A web-based tool to generate customizable configuration files for CS:GO, with options grouped into sections (e.g., "Mouse," "Sound," "Graphics") and default values pre-set for each setting. This tool makes it easy to tailor CS:GO settings without manually editing config files, by allowing users to select or deselect entire sections and adjust individual values.

## Features

- **Dynamic Form Generation**: Sections like "Mouse," "Sound," and "Graphics" are dynamically generated based on a configuration object in JavaScript, making it easy to add or modify sections and fields.
- **Default Values**: Each field is pre-set with a recommended default value, which can be customized by the user.
- **Section Headers and Comments**: Each section is clearly labeled with a header, and each field includes a description as a comment, making the final config file easy to read.
- **Config Compilation**: The form data is compiled into a configuration string with all section headers, settings, and comments, ready to be copied into a CS:GO config file.
  
## Usage

1. **Clone or download** this repository to your local machine.
2. Open `index.html` in a web browser.
3. **Select settings**: Each section is expandable, and fields have their default values pre-set.
   - You can uncheck settings or entire sections if they’re not required.
   - Adjust values as desired based on the descriptions provided for each setting.
4. **Generate Config**: Click the **Generate Config** button to compile all selected values into a config string.
5. Copy the resulting configuration from the output box and paste it into your CS:GO config file.

## Example Configuration

The generated config might look like:

// MOUSE sensitivity "2.05" // Main mouse sensitivity zoom_sensitivity_ratio_mouse "1" // Sensitivity for scoped weapons m_rawinput "1" // Enable direct input from the mouse

// SOUND volume "0.20" // General game volume snd_mixahead "0.025" // Sound latency delay ...


## Project Structure

- **configSections**: The configuration data object in JavaScript defines all sections and fields with properties like `name`, `type`, `default`, `description`, and other attributes.
- **JavaScript functions**: 
  - `generateForm()`: Dynamically generates the HTML form based on `configSections`.
  - `createFormFields()`: Builds the form fields for each section and handles default values.
  - `submitHandler()`: Compiles form data into the final config string with comments.
- **HTML and CSS**: Basic structure and styling of the form and output area.

## Future Enhancements

- Add the ability to save or download the generated config file directly.
- Implement more sections and settings to match all CS:GO config needs.
- Make sections collapsible for a more compact interface.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or additional features!

## License

This project is open-source and available under the MIT License.
