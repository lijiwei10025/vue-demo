<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vue-ueditor-warp
      v-model="detail"
      :config="editorConfig"
      @beforeInit="addCustomDialog"
      @ready="ready"
    ></vue-ueditor-warp>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  components: {
    "vue-ueditor-warp": VueUeditorWrap,
  },
  data() {
    return {
      detail: "",
    };
  },
  methods: {
    ready(editorInstance) {
      // editorInstance.setDisabled();
      console.log(this.detail, editorInstance);
    },
    // 添加自定义弹窗F
    addCustomDialog(editorId) {
      console.log(editorId);
      window.UE.registerUI(
        "test-dialog",
        function (editor, uiName) {
          // 创建 dialog
          let dialog = new window.UE.ui.Dialog({
            // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
            iframeUrl: "/admin/widget.images/index.html?fodder=dialog",
            // 需要指定当前的编辑器实例
            editor: editor,
            // 指定 dialog 的名字
            name: uiName,
            // dialog 的标题
            title: "上传图片",
            // 指定 dialog 的外围样式
            cssRules: "width:1200px;height:500px;padding:20px;",
          });
          this.dialog = dialog;
          var btn = new window.UE.ui.Button({
            name: "dialog-button",
            title: "上传图片",
            cssRules: `background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;`,
            onclick: function () {
              // 渲染dialog
              dialog.render();
              dialog.open();
            },
          });
          return btn;
        },
        37
      );
    },
  },
};
</script>