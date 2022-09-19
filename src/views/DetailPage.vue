<template>
  <div class="detail">
    <RyzeFormular @onSave="onSave" @onEdit="onClickEdit" :defaultValues="defaultValues"/>
    <ul class="dataList" v-for="(entry, index) in formValues" :key="entry+index">
      <li v-for="(value, name) in entry" :key="value+name">
        {{name + ": " + value}}
      </li>
      <button @click="() => onClickEdit(index)">Edit</button>
    </ul>
  </div>
</template>

<script>
import RyzeFormular from '../components/RyzeFormular.vue'
// import config from '../../config/index'
export default {
  name: 'DetailPage',
  data () {
    return {
      formValues: [],
      defaultValues: null,
      selectedIndex: -1
    }
  },
  methods: {
    onSave (values) {
      if (this.selectedIndex === -1) {
        this.formValues.push(values)
      } else {
        this.formValues[this.selectedIndex] = values
        this.formValues = [...this.formValues]
        this.selectedIndex = -1
      }
    },
    onClickEdit (index) {
      this.defaultValues = this.formValues[index]
      this.selectedIndex = index
    }
  },
  components: { RyzeFormular }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dataList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: space-between;
  align-items: center;
  width: 100%;
}
</style>
