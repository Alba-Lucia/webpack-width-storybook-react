import Checkbox from "./Checkbox"
import "./Checkbox.css"

const Template = (args) => <Checkbox{...args}/>

export default {
    title: 'Component/Checkbox',
    component: Checkbox,
}

export const Default = Template.bind({});
Default.args={
    children: (
        "ToggleCheck",
        <input
            onClick
            type="checkbox"
        />
    )
}