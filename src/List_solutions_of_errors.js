import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li style={{ backgroundColor: isSelected ? "green" : "red", }} onClick={() => onClickHandler(index) /*function call was incorrect*/ } > 
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(); /* useState return two entitities, first is the state and 
  the second is the function that sets the state, therefore the 1st parameter should be selectedIndex and the other one should be setSelectedIndex */ 

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map(
        (
          item,
          index 
        ) => (
          <SingleListItem
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={selectedIndex === index} // isSelected is used in determining the background-color of the list item
            key={index} // unique key prop
          />
        )
      )}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf( //we have to use .arrayOf instead of .array
    PropTypes.shape({ // .shapeOf is not func, we must use .shape
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
