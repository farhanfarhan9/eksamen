<template>
  <div class="flex justify-center items-center flex-col relative">

    <!-- Card -->
    <div class="sticky top-0 w-full lg:w-10/12 bg-white rounded shadow mb-5">
      <!-- Card Body -->
      <div v-if="expandDetails" class="p-4 flex flex-col md:flex-row justify-around items-start">
        <div class="mb-2 w-full md:w-6/12">
          <p>
            <span class="font-semibold">Ujian:</span> {{ exam.name }}
          </p>
          <p>
            <span class="font-semibold">Jumlah Soal:</span> Soal
          </p>
          <p>
            <span class="font-semibold">Batas Waktu:</span> {{ this.exam.timeLimit / 60 }} menit
          </p>
          <p>
            <span class="font-semibold">Waktu Tersisa:</span> {{ sisawaktu }}
          </p>
        </div>
        <div class="flex justify-center flex-row md:flex-col w-full md:w-6/12">
          <button
            @click="submit"
            class="mr-5 md:mr-0 md:mb-5 p-2 bg-pink-400 text-white rounded border border-pink-400 shadow"
          >
            Selesai Ujian 
          </button>
          <button
            @click="expandDetails = false"
            class="p-2 text-pink-400 rounded border border-pink-400 shadow"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
      <button
        v-else
        @click="expandDetails = true"
        class="w-full bg-pink-400 text-white rounded p-2 flex justify-center"
      >
        Buka Informasi Ujian
      </button>
    </div>
    
    <div v-for="(question, questionIndex) in exam.questions" v-bind:key="question.id" class="mb-5 w-full lg:w-10/12 bg-white rounded shadow">
      <!-- Card Body -->
      <div class="p-4">
        <div class="mb-2">
          <span class="font-semibold">Soal:</span> <span class="question__text">{{ question.text }}</span>
        </div>
        <div>
          <span class="block font-semibold mb-2">Jawaban:</span>
          <ul>
            <li class="mb-2" v-for="answer in question.answers" v-bind:key="answer.id">
              <button
              @click="answerQuestion(questionIndex, answer.id)"
              class="answer__text block w-full md:w-6/12 p-2 border border-pink-400 rounded text-left"
              :class="{'bg-pink-400 text-white': question.selectedAnswer == answer.id}">
                {{ answer.text }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
  name: 'TakeExamPage',
  beforeRouteLeave (to, from, next) {
    next();
  },
  mounted: function() {
    this.exam = this.$store.state.exams.find(item => item.id == this.$route.params.id);
    setInterval(() => {
      this.remainTime = this.remainTime - 1;
    }, 1000);
  },
  updated: function() {
    console.warn('Component update');
  },
  data() {
    return {
      exam: {},
      remainTime: 1800,
      expandDetails: true,
    }
  },
  computed: {
    sisawaktu: function () {
      let sisatotal = this.remainTime;
      let sisamenit = (sisatotal / 60);
      let sisadetik = (sisatotal % 60);
      let keluar = parseInt(sisamenit) + ' menit ' + parseInt(sisadetik) + ' detik';
      return keluar;
    },
    answeredQuestion: function () {
      return this.exam.questions.filter(item => item.selectedAnswer !== -1).length;
    },
    totalQuestion: function () {
      return this.exam.questions.length;
    }
  },
  methods: {
    answerQuestion: async function(questionIdx, answerId) {
      if (this.exam.questions[questionIdx].selectedAnswer == answerId) {
        this.$set(this.exam.questions[questionIdx], 'selectedAnswer', -1);
      } else {
        this.$set(this.exam.questions[questionIdx], 'selectedAnswer', answerId);
      }
    },
    submit: function () {
      Swal.fire({
        title: 'Apakah anda yakin menyelesaikan?',
        text: 'Anda telah menjawab sebanyak ' + this.answeredQuestion +' / ' + this.totalQuestion + ' total pertanyaan.',
        icon: 'question',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Ya, selesai',
        confirmButtonColor: '#F687B3',
        cancelButtonText: 'Batalkan',
        allowOutsideClick: true,
      }).then(({ value }) => {

        const totalNilai = this.exam.questions.reduce((total, current) => {
          if (current.selectedAnswer == current.correctAswer) {
            return total + 1;
          } else {
            return total + 0;
          }
        }, 0);

        const filledIn = this.exam.questions.filter(item => item.selectedAnswer !== -1).length;

        if (value) {
          this.$store.commit('finishExam', {
            total:this.exam.questions.length,
            score: totalNilai,
            filledIn: filledIn,
            remainTime: this.remainTime,
          });

          this.$router.replace('finish');
        }
      })
    }
  }
};
</script>

<style>
.question__text, .answer__text {
  font-family: 'Noto Serif', serif;
}
</style>
