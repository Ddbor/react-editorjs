import { EditorConfig } from "@editorjs/editorjs";

export const defaultConfig: EditorConfig = {
  autofocus: true,
  tools: {},
  i18n: {
    messages: {
      toolNames: {
        Text: "文本",
        Bold: "加粗",
        Italic: "斜体",
        Link: "链接",
      },
      ui: {
        toolbar: {
          toolbox: {
            Add: "工具箱",
          },
        },
        popover: {
          Filter: "名称搜索",
          "Nothing found": "空",
        },
        inlineToolbar: {
          converter: {
            "Convert to": "转换",
          },
        },
        blockTunes: {
          toggler: {
            "Click to tune": "菜单",
          },
        },
      },
      tools: {
        link: {
          "Add a link": "粘贴或输入链接",
        },
      },
      blockTunes: {
        delete: {
          Delete: "删除",
          "Click to delete": "点击确认删除",
        },
        moveUp: {
          "Move up": "上移",
        },
        moveDown: {
          "Move down": "下移",
        },
      },
    },
  },
};
