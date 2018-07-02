<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-6 pd-20px card">
          <label class="title is-3"> Create Character </label>
          <section>
            <b-field 
              label="Name">
              <b-input 
                value=""
                type="text"
                v-model="newCharacter.name">
              </b-input>
            </b-field>
            <b-field
              label="Weight">
              <b-input 
                value=""
                type="number"
                v-model="newCharacter.weight">
              </b-input>
            </b-field>
            <b-field
              label="Night">
              <b-select
              placeholder="Night Enable"
              v-model="newCharacter.night">
                <option value="true">True</option>
                <option value="false">False</option>
              </b-select>
            </b-field>
            <b-field class="file">
              <b-upload v-model="newCharacter.img">
                <a class="button is-primary">
                  <b-icon icon="upload"></b-icon>
                  <span>Img character</span>
                </a>
              </b-upload>
              <span class="file-name"
                v-if="newCharacter.img && newCharacter.img.length">
                {{ newCharacter.img[0].name }}
              </span>
            </b-field>
            <b-field
              label="Detail"
              >
              <b-input
                value=""
                type="textarea"
                v-model="newCharacter.detail">
              </b-input>
            </b-field>
            <b-field v-if="isUploading">
              <progress class="progress is-danger is-small" :value="uploadProgress" max="100">90%</progress>
            </b-field>
            <b-field><!-- Label left empty for spacing -->
              <p class="control">
                <button class="button is-primary" @click="addNewCharacter">
                  Create Character
                </button>
              </p>
               <p class="control">
                <button class="button is-danger" @click="clear">
                  Crear
                </button>
              </p>
            </b-field>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Character',
  data () {
    return {
      newCharacter: {
        img: [],
        name: '',
        night: false,
        detail: '',
        weight: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createNewCharacter',
      'bindcharacterRef',
      'unbindcharacterRef'
    ]),
    addNewCharacter () {
      this.createNewCharacter(this.newCharacter)
    },
    clear () {
      console.log('clear')
    }
  },
  computed: {
    ...mapGetters([
      'characters',
      'uploadProgress',
      'isUploading'
    ])
  },
  created () {
    this.bindcharacterRef()
  },
  destroyed () {
    this.unbindcharacterRef()
  }
}
</script>