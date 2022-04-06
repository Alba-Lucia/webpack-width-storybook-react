import Checkbox from "./Checkbox"
import "./Checkbox.css"

const Template = () => <Checkbox/>

export default {
    title: 'Component/Checkbox',
    component: Checkbox,
}

export const Default = Template.bind({});
Default.args={
    children: (
        <input
            onClick
            type="checkbox"
        />
    )
}