import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from "react";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import { defaultConfig } from "./defaultConfig";

export type ReactEditorjsProps = {
  /**
   * EditorJS style
   */
  style?: React.CSSProperties;
  /**
   * EditorJS class
   */
  className?: string;
  /**
   * EditorJS config
   */
  editorConfig?: EditorConfig;
};

export type ReactEditorjsRef = {
  /**
   * 保存
   */
  save: () => Promise<OutputData | undefined>;
};

const ReactEditorjs = forwardRef<ReactEditorjsRef, ReactEditorjsProps>(
  ({ style, className, editorConfig }, ref) => {
    const editorId = useId();
    const editorRef = useRef<EditorJS>();

    useImperativeHandle(
      ref,
      () => ({
        save: async () => {
          return await editorRef.current?.save();
        },
      }),
      []
    );

    useEffect(() => {
      if (!!editorRef.current) {
        return;
      }

      editorRef.current = new EditorJS(
        Object.assign(
          {
            holder: editorId,
          },
          defaultConfig,
          editorConfig
        )
      );

      return () => {
        editorRef.current?.destroy?.();
      };
    }, []);

    return <div id={editorId} className={className} style={style}></div>;
  }
);

export default ReactEditorjs;
