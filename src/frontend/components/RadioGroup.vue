<script>
export default {
    name: 'RadioGroup',
    props: {
        modelValue: {
            type: String,
            default: null
        },  
        label: {
            type: String,
            default: ''
        },
        /**
         * @type {{ text: string, value: string }[]}
         */
        options: {
            type: Array,
            default: () => []
        }
    },
    setup({ modelValue }, { emit }) {
        function handleInput(value) {
            console.log(value)
            if (modelValue === value) {
                return
            }
            emit('update:modelValue', value)
        }

        function isChecked(value, isDefault) {
            if(!modelValue && isDefault) {
                return true
            }
            return value === modelValue
        }

        return { handleInput, isChecked }
    }
}
</script>

<template>
    <div class="radio-group-wrapper">
        <span> {{ label }}:</span>

        <div v-for="option of options">
            <input 
                type="radio" 
                :id="option.value" 
                :name="label"
                :model-value="modelValue" 
                :checked="isChecked(option.value, option.default)"
                @input="handleInput(option.value)"
            />
            <label :for="option.value">{{ option.text }}</label>
        </div>
    </div>
</template>

<style type="css" scoped>
.radio-group-wrapper {
    display: flex;
    justify-content: space-around;
}
</style>