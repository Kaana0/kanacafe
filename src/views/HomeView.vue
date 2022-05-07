<template>
<div class="home">
<HeaderComp></HeaderComp>
<main>
  <section id="mv">
    <div class="copy__wrapper">
      <h2 class="mv__ttl">Welcome to Cafe Kana</h2>
      <p class="mv__txt">香り高いコーヒーをお楽しみ下さい！</p>
    </div><!-- /.copy__wrapper -->
  </section><!--mv-->
  <section id="posi">
    <h2 class="ttl">COFFE</h2>
    <div class="container">
      <div class="posi__box__wrapper">
        <div class="posi__box posi__box__01"></div>
        <div class="posi__box posi__box__02"></div>
        <div class="posi__box posi__box__03"></div>
      </div>
      <div class="posi__box__wrapper posi__box__wrapper__02">
        <div class="posi__box posi__box__04"></div>
        <div class="posi__box posi__box__05"></div>
        <div class="posi__box posi__box__06"></div>
      </div>
    </div>
  </section><!-- /#posi -->
  <section id="menu">
    <h2 class="ttl">Menu</h2>
    <div class="container">
      <ul class="main__img">
        <li>
          <a href="#">
            <p><img src="" alt=""></p>
            <div class="menu__inner">
              <h3 class="menu__ttl">ブレンドコーヒー</h3>
              <p class="menu_txt">自家製豆から挽いた美味しいコーヒーです。</p>
            </div><!-- /.menu__inner -->
          </a>
        </li>
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
      </ul><!-- /.main__img -->
    </div>
  </section><!-- /#menu -->
  <section id="desc">
    <h2 class="ttl">About</h2>
    <div class="desc__wrapper">
      <div class="desc__left"><img src="" alt=""></div>
      <div class="desc__right"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    </div>
    <div class="desc__wrapper desc__wrapper_reverse">
      <div class="desc__left"><img src="" alt=""></div>
      <div class="desc__right"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    </div>
  </section><!-- /#desc -->
  <section id="accordion">
    <h2 class="ttl">Accordion</h2>
    <div class="container">
      <input type="radio" id="tab01" class="trigger">
      <label for="tab_01" class="tab_label">アコーディオン1</label>
      <div class="contents">
        <h4>コンテンツ1</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <input type="radio" id="tab02" class="trigger">
      <label for="tab_02" class="tab_label">アコーディオン2</label>
      <div class="contents">
        <h4>コンテンツ2</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <input type="radio" id="tab03" class="trigger">
      <label for="tab_03" class="tab_label">アコーディオン3</label>
      <div class="contents">
        <h4>コンテンツ3</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
  </section><!-- /#accordion -->
  <section id="table">
    <h2 class="ttl">Table</h2>
    <div class="container">
      <div class="tbl__wrapper">
        <table class="tbl__01">
          <tr>
            <th>見出し</th>
            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
            <td>データデータデータ</td>
          </tr>
        </table>
      </div>
    </div>
  </section><!-- /#table -->
  <section id="access">
    <h2 class="ttl">Access</h2>
    <div class="container">
      <div class="map__wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0PzYE3aQ5y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </section><!-- /#access -->
  <section id="footer__top">
    <h2 class="ttl">Contact</h2>
    <div class="container">
      <form>
        <div class="form__wrapper">
          <div class="input__box">
            <label for="name">氏名</label>
            <input type="text" id="name" placeholder="氏名" required>
          </div>
          <div class="input__box">
            <input type="radio" id="gender1" name="gender" value="man"><label for="gender1"></label>
            <input type="radio" id="gender2" name="gender" value="woman"><label for="gender2"></label>
          </div>
          <div class="input__box">
            <label for="tel">電話番号</label>
            <input type="tel" id="tel" placeholder="000-0000-0000">
          </div>
          <div class="input__box">
            <label for="mail">メールアドレス</label>
            <input type="text" id="mail" placeholder="kana@gmail.com">
          </div>
          <div class="input__box">
            <textarea name="biko" cols="30" rows="10" placeholder="備考"></textarea>
          </div>
          <div class="input__box">
            <input type="checkbox" id="agreement" required><label for="agreement" class="dsp"></label>
          </div>
          <div class="input__box">
            <input class="btn" type="submit" value="送信">
          </div>
          <div class="input__box">
            <button class="btn btn__arrow">
              <span class="btn__box__txt">入力内容を確認後</span>
              送信
            </button>
          </div>
          <div class="input__box btn__box">
            <a href="#" class="btn btn_link">
              Click
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
            </a>
          </div>
        </div>
      </form>
    </div>
  </section><!-- /#footer__top -->
</main>
<FooterComp></FooterComp>
</div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp,
  }
}
</script>
