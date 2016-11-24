<template lang="html">
  <div class="card-wrapper" :style="{ height: height }">
    <div class="card-header group">
      <div class="card-title">
        <slot name="header"></slot>
      </div>
      <div class="card-refresh">
        <i class="material-icons">refresh</i>
      </div>
    </div>

    <div class="card-data group" v-if="type === 'data'">
      <div class="card-value">
        <slot name="body"></slot>
      </div>
      <div class="card-graph" v-bind:class="classObject" v-if="minichart">
        <i class="material-icons" v-if="trend === 'positive'">trending_up</i>
        <i class="material-icons" v-if="trend === 'negative'">trending_down</i>
        <i class="material-icons" v-if="trend === 'flat'">trending_flat</i>
      </div>
    </div>

    <div class="card-chart" v-if="type === 'chart'">
      <slot name="body"></slot>
    </div>

    <div class="card-table" v-if="type === 'table'">
      <table>
        <thead>
          <tr>
            <th>
              Tariffa
            </th>
            <th>
              Selezioni
            </th>
            <th>
              Dettaglio
            </th>
            <th>
              Conversione
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Last Second Rate
            </td>
            <td>
              21
            </td>
            <td>
              21
            </td>
            <td>
              2.2%
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card-comment">
      <slot name="tip"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'data'
    },
    trend: {
      type: String,
      default: 'negative'
    },
    minichart: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  computed: {
    classObject: function () {
      return {
        positive: this.trend === 'positive',
        negative: this.trend === 'negative',
        flat: this.trend === 'flat'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/imports.scss';
.card-wrapper{
  background-color: #FFF;
  box-shadow: $card-shadow;
  border-radius: 4px;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 30px;
  .card-header{
    color: $primary;
    padding-left: 1em;
    padding-right: 1em;
    font-weight: 600;
    margin-bottom: 15px;
    .card-title, .card-refresh{
      float: left;
    }
    .card-title{
      width: 85%;
    }
    .card-refresh{
      width: 15%;
      text-align: right;
      color: $link-header;
      cursor: pointer;
      i{
        transition: all 0.4s ease-in-out;
        &:hover{
          transform: rotate(360deg);
          color: $primary
        }
      }
    }
  }
  .card-data{
    padding-left: 1em;
    padding-right: 1em;
    .card-value, .card-graph{
      float: left;
    }
    .card-value{
      width: 70%;
      font-size: 1.8em;
      font-weight: 600;
      color: $primary;
    }
    .card-graph{
      width: 30%;
      text-align: center;
      cursor: pointer;
      margin-bottom: 15px;
      &.flat{
        i{
          color: $primary;
        }
      }
      &.positive{
        i{
          color: $success;
        }
      }
      &.negative{
        i{
          color: $danger;
        }
      }
      i{
        font-size: 2.5em;
        vertical-align: middle;
      }
    }
  }
  .card-chart{
    padding-left: 1em;
    padding-right: 1em;
  }
  .card-table{
    margin-bottom: 15px;
    text-align: left;
    table{
      width: 100%;
      border-collapse: collapse;
      thead{
        color: $gray;
        border-top: 1px solid $light-gray;
        border-bottom: 1px solid $light-gray;
        th{
          font-weight: 400;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 1em;
          padding-right: 1em;
        }
      }
      tbody{
        tr{
          border-bottom: 1px solid $light-gray;
          td{
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
  .card-comment{
    color: $link-header;
    font-size: 0.9em;
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
