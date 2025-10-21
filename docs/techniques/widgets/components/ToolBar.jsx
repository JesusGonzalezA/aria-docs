import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

const ToolbarContext = createContext();

const ToolBar = ({ children, orientation = 'horizontal', ariaLabel, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const registerItem = (ref, index) => {
    if (itemRefs.current)
        itemRefs.current[index] = ref;
  };

  useEffect(() => {
    itemRefs.current[activeIndex]?.current?.focus();
  }, [activeIndex])

  const value = {
    orientation,
    activeIndex,
    setActiveIndex,
    registerItem,
    itemCount: React.Children.count(children),
  };

  return (
    <div
      role="toolbar"
      aria-orientation={orientation}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      style={{
        padding: '0.5rem',
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: '0.25rem'
      }}
      {...rest}
    >
      <ToolbarContext.Provider value={value}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, { index });
        })}
      </ToolbarContext.Provider>
    </div>
  );
};

const Item = ({ as = 'button', onClick, children, index, ...rest }) => {
  const { orientation, activeIndex, setActiveIndex, registerItem, itemCount } = useContext(ToolbarContext);
  const ref = useRef(null);

  useEffect(() => {
    registerItem(ref, index);
  }, [index, registerItem]);

  const isActive = index === activeIndex;

  const handleKeyDown = (event) => {
    let newIndex = null;
    const key = event.key;

    if (orientation === 'horizontal') {
      if (key === 'ArrowRight') newIndex = (index + 1) % itemCount;
      if (key === 'ArrowLeft') newIndex = (index - 1 + itemCount) % itemCount;
    } else {
      if (key === 'ArrowDown') newIndex = (index + 1) % itemCount;
      if (key === 'ArrowUp') newIndex = (index - 1 + itemCount) % itemCount;
    }

    if (newIndex !== null) {
      event.preventDefault();
      setActiveIndex(newIndex);
    }
  };

  return React.createElement(
    as,
    {
      ref,
      tabIndex: isActive ? 0 : -1,
      onKeyDown: handleKeyDown,
      onClick: (e) => {
        setActiveIndex(index);
        if (onClick) onClick(e);
      },
      style: {
        padding: '0.5rem',
      },
      ...rest
    },
    children
  );
};
ToolBar.Item = Item;

export { ToolBar };
