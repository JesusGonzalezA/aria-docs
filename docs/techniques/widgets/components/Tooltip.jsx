import React, { useId } from "react";

export const Tooltip = ({ text, children }) => {
    const targetId = useId();
    const popoverId = useId();
    const tooltipRef = React.useRef();

    const hide = React.useCallback(() => tooltipRef.current?.hidePopover(), [tooltipRef.current]);
    const show = React.useCallback(() => tooltipRef.current?.showPopover(), [tooltipRef.current]);

    return <>
        { 
            React.cloneElement(React.Children.only(children), {
                "aria-describedby": popoverId,
                id: targetId,
                popoverTarget: popoverId,
                style: { anchorName: `--${targetId}` },
                onPointerEnter: show,
                onPointerLeave: hide,
                onFocus: show,
                onBlur: hide,
                onKeyDown: (e) => {
                    if (e.code === "Escape") hide();

                    children.onKeyDown && children.onKeyDown(e);
                }
            })
        }

        {
            <span 
                ref={tooltipRef}
                id={popoverId}
                role="tooltip"
                popover="auto"
                anchor={targetId}
                style={{
                    positionAnchor: `--${targetId}`,
                    inset: "auto auto anchor(top) anchor(left)",
                    background: "black",
                    color: "white",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                }}
            >
                { text }
            </span>
        }
    </>
}