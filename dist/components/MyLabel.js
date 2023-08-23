import { jsx as _jsx } from "react/jsx-runtime";
import './MyLabel.css';
export function MyLabel({ label, size = 'normal', allCaps = false, color, fontColor, }) {
    return (_jsx("span", { className: `${size} ${color} label`, style: { color: fontColor }, children: allCaps ? label.toUpperCase() : label }));
}
