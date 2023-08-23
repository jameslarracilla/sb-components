import { MyLabel } from '../components/MyLabel';
const meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' },
    },
};
export default meta;
export const Basic = {
    args: {
        label: 'Basic Label',
        size: 'normal',
    },
};
export const AllCaps = {
    args: {
        label: 'All Caps Label',
        allCaps: true,
    },
};
export const Secondary = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    },
};
export const CustomColor = {
    args: {
        label: 'Custom Color Label',
        fontColor: '#5517ac',
    },
};
