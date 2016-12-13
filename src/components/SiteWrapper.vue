<template lang="html">
<div class="site-wrapper">
  <site-header></site-header>
  <site-hero></site-hero>

  <section class="realtime">
    <el-row type="flex" align="middle" justify="center" class="fheight">
      <el-col :span="12">
        <div class="text">
          <h2>
            Gestione Realtime <br>
            <small>tracciamento, chat, override prezzi.</small>
          </h2>
          <p>
            Traccia il tuo utente in tempo reale. Visualizza le offerte inviate, la posizione
            il tempo di connessione e decidi quando e se interagire con lui. Potrai avviare
            una sessione di chat ed effettaure sconti diretti ed unici sulle tariffe.
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="image">
          <img src="../assets/tablet.svg">
        </div>
      </el-col>
    </el-row>
  </section>

  <section class="data">
    <el-row type="flex" align="middle" justify="center" class="fheight">
      <el-col :span="12">
        <div class="image">
          <img src="../assets/bigdata.svg">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="text">
          <h2>
            Analisi avanzata <br>
            <small>registra, analizza, semplifica.</small>
          </h2>
          <p>
            Grazie al tracciamento RealTime il Booking Engine è in grado di registrare le azioni e le sessioni di ogni utente.
            Questi dati verrano successivamente elaborati e visualizzati grazie a report semplificati che ti aiuteranno
            ad impostare in modo corretto la tua strategia di distibuzione online.
          </p>
        </div>
      </el-col>
    </el-row>
  </section>

  <section class="responsive">
    <el-row type="flex" align="middle" justify="center" class="fheight">
      <el-col :span="12">
        <div class="text">
          <h2>
            Design rinnovato <br>
            <small>material design, responsive.</small>
          </h2>
          <p>
            L'esperienza utente è imporante, per questo motivo l'intero booking engine rispetta la guida
            di stile <strong><a href="https://material.google.com/" target="_blank">Material Design</a></strong> elaborata da Google.
            Inoltre l'intera intefaccia grafica è adattabile ( responsive ) e quindi compatibile con la gran parte dei dispositivi mobili.
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="image">
          <img src="../assets/responsive.svg">
        </div>
      </el-col>
    </el-row>
  </section>

  <section class="developer">
    <el-row>
      <el-col :span="24">
        <div class="text">
          <h2>
            Personalizzazione Booking Engine <br>
            <small>progetta, implementa, distrubisci.</small>
          </h2>
          <p>
            La nuova API JSON permette di integrare in modo semplice tutti i nostri servizi all'interno delle tue applicazioni o siti web.
            Potrai sfruttare questa tecnologia per realizzare un booking engine personalizzato o contattare direttamente il nostro reparto tecnico per
            usufruire dei servizi di sviluppo.
          </p>

          <!-- <a href="#">
            Documentazione API <i class="material-icons">arrow_forward</i>
          </a> -->
        </div>
        <div class="image">
          <img src="../assets/developer.svg" alt="">
        </div>
      </el-col>
    </el-row>
  </section>

  <footer>
    ciao
  </footer>

</div>
</template>

<script>
import SiteHeader from './SiteHeader'
import SiteHero from './SiteHero'
export default {
  components: {
    SiteHeader,
    SiteHero
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
$ptop: 60px;
$pbottom: 60px;
$imageheight: 200px;
html, body, #app{
  overflow-y: auto;
}
.fheight{
  height: 100%;
}
.text{
  width: 80%;
  margin: 0 auto;
  a{
    color: #FFF;
  }
}
.image{
  img{
    width: $imageheight;
    height: auto;
    vertical-align: middle;
    width: auto;
  }
}
section{
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;
  h2{
    font-size: 2rem;
    line-height: 23px;
    font-weight: 400;
    color: #FFF;
    small{
      padding-top: 10px;
      font-weight: 300;
      font-size: 60%;
      line-height: 10px;
    }
  }
  p{
    font-size: 1.2rem;
    font-weight: 100;
    color: #FFF;
  }
  &.realtime{
    background: linear-gradient(to left bottom,#2f1847,#361f51,#5d3b7b,#a966ae);
    position: relative;
    .image{
      text-align: right;
      img{
        height: 500px;
        width: auto;
      }
    }
  }
  &.data{
    background: linear-gradient(to right bottom,#101a26,#1a2838,#213244,#27384c);
    .image{
      text-align: center;
      img{
        height: 500px;
        width: auto;
      }
    }
  }
  &.responsive{
    background-color: #162638;
    background: linear-gradient(to left bottom,#05284f,#093463,#0c3b70,#0e427c);
    .image{
      text-align: center;
    }
    img{
      height: 500px;
      width: auto;
    }
  }
  &.developer{
    background-color: #f3f6ff;
    .text{
      text-align: center;
      h2{
        color: $primary;
      }
      p{
        color: $silver;
        margin-bottom: 40px;
      }
      a{
        color: $success;
        text-decoration: none;
        border: 2px solid $success;
        border-radius: 30px;
        padding: 1em;
        transition: all 0.5s ease-in-out;
        &:hover{
          background: $success;
          color: #FFF;
        }
      }
    }
    .image{
      margin-top: 40px;
      text-align: center;
      img{
        height: 400px;
      }
    }
  }
}

footer{
  background-color: #080f0f;
  padding-top: 60px;
  padding-bottom: 60px;
}

.doc-button{
}
</style>
