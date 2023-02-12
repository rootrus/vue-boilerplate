<template>
  <div>
    <label v-if="label">{{label}}</label>
    <select id="select" v-model="options.selectedOption" v-bind="$attrs" >
      <option v-for="option in options.data" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
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
          options: {
               type: Object,
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
     }
}
</script>