<template>

  <label v-if="label">{{ label }}</label>
  <div v-if="['checkbox', 'radio'].includes(type)">
      <label v-for="option in options.data" :key="option.value">
        <input  type="checkbox" :id="'option-'" :value="option.value" v-model="selectedOption" name="data" v-bind="$attrs" />
        {{ option.text }}
      </label>
  </div>
  <div v-else>
     <input v-bind="$attrs" :value="modelValue" :placeholder="label" @input="$emit('update:modelValue', $event.target.value)" class="field">
  </div>

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
          required: true,
          type: String,
          default: "text",
          validator(value) {
               const inputType = ['text', 'password', 'checkbox', 'radio', 'submit', 'reset', 'button', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week', 'select']
               if (!inputType.includes(value.toLowerCase())) {
                    throw new Error(`Invalid input format: ${inputType.toString()}`); 
               }
               return;
          }
    },
     options: {
          type: Object,
          required: false,
          default: '',
          validator(value) {
               const format = {
                    selectedOption: '',
                    data: [{text: 'Please select an option', value: '' },{text:'', value:''}]
               }
               if (typeof value !== 'object'){ 
                    throw new Error('Options has to be an object'); 
               }
               
               if (!value.hasOwnProperty('selectedOption')){ 
                    value.selectedOption = '' 
               }

               if (!value.hasOwnProperty('data')){ 
                    throw new Error(`Format required ${JSON.stringify(format)}`); 
               }

               if (
                    !value['data'].every(
                         option => option.hasOwnProperty('text') && option.hasOwnProperty('value')
                    )
               ) {
               throw new Error(
                    'options prop must be an array of objects with text and value properties'
                    );
               }
               return;
          }
     }
  },
  data() {
     return {
          options: (['checkbox', 'radio'].includes(this.type) && Array.isArray(this.options.data)) ? this.options : ['checkbox', 'radio'].includes(this.type) ? [] : '',
     }
  }

}
</script>