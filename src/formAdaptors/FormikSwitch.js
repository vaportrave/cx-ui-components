import InputSwitch from '../inputs/InputSwitch';
import createBaseFormAdaptor from './createBaseFormAdaptor';

const FormikSwitch = createBaseFormAdaptor(InputSwitch,{
    changeValueGetter: event => event.target.checked,
    isCheckbox: true
});

export default FormikSwitch;
