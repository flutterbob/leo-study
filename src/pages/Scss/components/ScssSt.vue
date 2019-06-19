<template>
  <div class="scssSt">
    <label for>This is for Scss Study</label>
    <div id="test"></div>
    <div id="content">
      <article>
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
        <h3>Hello H3</h3>
        <h4>Hello H4</h4>
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
        <h3>Hello H3</h3>
        <h4>
          当通过@import把sass样式分散到多个文件时，你通常只想生成少数几个css文件。那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件。对此，sass有一个特殊的约定来命名这些文件。
          此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky";。
          局部文件可以被多个不同的文件引用。当一些样式需要在多个页面甚至多个项目中使用时，这非常有用。在这种情况下，有时需要在你的样式表中对导入的样式稍作修改，sass有一个功能刚好可以解决这个问题，即默认变量值。
        </h4>
        <a href>这是一个链接</a>
      </article>
    </div>
    <div id="content2">
      <article>
        <section>
          Section1
          <section>Section-sub-Section</section>
        </section>
        <section>Section2</section>
      </article>
    </div>
    <div class="blue-theme">
      <aside>This is blue theme!</aside>
    </div>

    <div class="mixinParams">
      <a href="#">Happy</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../style/base/mixin";
// 定义变量
$test_blue: green;

#test {
  width: 10px;
  height: 10px;
  background-color: $test-blue;
}

#content {
  article {
    h1,
    h2,
    h3,
    h4 {
      font-size: 10px;
      color: $test_blue;
    }
  }
  a {
    &:hover {
      color: $test_blue;
    }
  }
}

#content2 {
  article {
    > section {
      margin: {
        top: 10px;
      }
      border: {
        style: solid;
        width: 1px;
        color: $test_blue;
      }
      @include rounded-corners;
    }
  }
}

.blue-theme {
  @import "../style/bluetheme.scss";
}

.mixinParams {
  a {
    @include link-colors(blue);
  }
}
</style>
