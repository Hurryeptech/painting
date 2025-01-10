import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const LanguageSelector = () => {
  const [selected, setSelected] = useState("US"); // Default to US (English)

  // Custom labels mapping country codes to languages
  const customLabels = {
    US: "English",
    FR: "French",
    ES: "Spanish",
  };

  return (
    <div className="language-selector">
      <ReactFlagsSelect
      placeholder="English"
        countries={["US", "FR", "ES"]} // Limit to specific countries
        customLabels={customLabels} // Use custom labels
        selected={selected} // Selected value
        onSelect={(code) => setSelected(code)} // Handle selection
        showSelectedLabel={true}
        showOptionLabel={true}
        className="text-gold"
      />
    </div>
  );
};

export default LanguageSelector;
