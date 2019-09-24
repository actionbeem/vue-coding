<template>
  <section>
    <div class="detail-wrap">
      <div class="inner">
        <h1 class="pg-tit mb-30">About</h1>
        <p class="desc">디자인, 퍼블리싱, 프론트엔드 개발 등 프론트 전반의 영역에 많은 관심과 흥미를 갖고,<br>
        프론트 총괄 마스터를 지향하며 그에 걸맞는 역량을 키워 나가고 있습니다.<br>
        현재까지의 경험은 디자인과 퍼블리싱이 주된 실무 경험이었으며, 점차 프론트엔드 개발 영역까지 확장해나가는 중에 있습니다.<br>
        한 가지 분야만 고집하기 보다는 폭 넓은 경험과 시야를 가진 전문가이고 싶습니다. <br>
        관심 가져 주셔서 감사합니다.</p>
        <div class="skill-wrap clear">
          <div class="half mb-30 clear" v-for="skill in skills" :key="skill.id">
            <div class="logo">
              <img src="../assets/images/logo_css3.png" alt="로고">
            </div>
            <div class="graph">
              <p class="label">{{ skill.label }}</p>
              <div class="gage">
                <p class="bar" :class="skill.id" style="background-color:#1d61ac;"></p>
              </div>
            </div>
          </div>
          <!-- <div class="half clear">
            <div class="logo">
              <img src="../assets/images/logo_js.png" alt="로고">
            </div>
            <div class="graph">
              <p class="label">Javascript</p>
              <div class="gage">
                <p class="bar" ref="bar" style="background-color:#f2dc1c;"></p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="bottom-cover"></div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      skills: [
        {id: 'bar01', width: '60%', label: 'HTML 5' },
        {id: 'bar02', width: '80%', label: 'Javascript' },
        {id: 'bar03', width: '50%', label: 'Photoshop' },
        {id: 'bar04', width: '90%', label: 'CSS 3' },
      ],
    }
  },
  mounted(){
    console.log(document.querySelector('.bar01'))
    document.querySelector('.bar01').style.width = '80%';
    document.querySelector('.bar01').style.transition = 'width 1.5s ease';
    document.querySelector('.bar02').style.width = '50%';
    document.querySelector('.bar02').style.transition = 'width 1.5s ease';
    document.querySelector('.bar03').style.width = '60%';
    document.querySelector('.bar03').style.transition = 'width 1.5s ease';
    document.querySelector('.bar04').style.width = '90%';
    document.querySelector('.bar04').style.transition = 'width 1.5s ease';
  }
}
</script>

<style scoped>
.detail-wrap { padding-top:90px; }
.detail-wrap .inner { width:900px; height:1000px; margin:0 auto; }
.detail-wrap .desc { font-size:18px; line-height:1.8; color:#999; font-weight:normal;}

.half { width:50%; float:left; padding-right: 40px; box-sizing:border-box; }
.skill-wrap { margin-top:50px;}
.skill-wrap .logo { width:20%; float:left; }
.skill-wrap .logo > img { width:60px; border-radius:8px; box-shadow:0 10px 15px rgba(0,0,0,0.1);}
.skill-wrap .graph { width:80%; float:left; padding-top:8px; }
.skill-wrap .label { font-size:15px; margin-bottom:10px; }
.skill-wrap .gage { height:10px; background-color:#eee; border-radius:15px; position:relative; }
.skill-wrap .bar { width:0; height:10px; border-radius:15px; position:absolute; top:0px; left:0px; }
</style>
