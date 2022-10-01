import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const List = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  return (
    <ul>
      {items.map((item, index) => (
        <li 
          onClick={()=> setSelectedIndex(index)} 
          style={{ backgroundColor: selectedIndex === index ? 'green' : 'red'}} 
          key={index} 
        >
              {item.text}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf( 
    PropTypes.shape({ 
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: null,
};

export default memo(List);