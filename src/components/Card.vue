<template lang="html">
  <div class="card-wrapper">
    <div class="card-header group">
      <div class="card-title">
        {{title}}
      </div>
      <div class="card-refresh">
        <i class="material-icons">refresh</i>
      </div>
    </div>

    <div class="card-data group" v-if="type === 'data'">
      <div class="card-value">
        <slot></slot>
      </div>
      <div class="card-graph" v-bind:class="classObject">
        <i class="material-icons" v-if="trend === 'positive'">trending_up</i>
        <i class="material-icons" v-if="trend === 'negative'">trending_down</i>
        <i class="material-icons" v-if="trend === 'flat'">trending_flat</i>
      </div>
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
      {{tip}}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'card'
    },
    title: {
      type: String
    },
    tip: {
      type: String
    },
    trend: {
      type: String,
      default: 'negative'
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
  box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
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
