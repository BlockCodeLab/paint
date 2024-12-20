// packages/paint/src/l10n/index.js
import { addLocalesMessages } from "@blockcode/core";

// packages/paint/src/l10n/en.yaml
var en_default = { "paint.contextMenu.duplicate": "duplicate", "paint.contextMenu.export": "export", "paint.contextMenu.delete": "delete", "paint.actionButton.upload": "Upload Image", "paint.actionButton.uploadCostume": "Upload Costume", "paint.actionButton.uploadBackdrop": "Upload Backdrop", "paint.actionButton.uploadError": 'Upload "{file}" failed.', "paint.actionButton.surprise": "Surprise", "paint.actionButton.paint": "Paint", "paint.actionButton.image": "Choose a Image", "paint.actionButton.costume": "Choose a Costume", "paint.actionButton.backdrop": "Choose a Backdrop", "paint.painter.image": "Image", "paint.painter.costume": "Costume", "paint.painter.backdrop": "Backdrop", "paint.painter.name": "name", "paint.painter.undo": "Undo", "paint.painter.redo": "Redo", "paint.painter.pen": "Pen", "paint.painter.eraser": "Eraser", "paint.painter.fill": "Fill", "paint.painter.text": "Text", "paint.painter.line": "Line", "paint.painter.curve": "Curve", "paint.painter.rectangle": "Rectangle", "paint.painter.circle": "Circle", "paint.painter.isogon": "Isogon", "paint.painter.polygon": "Polygon", "paint.painter.select": "Select", "paint.painter.center": "Center", "paint.painter.outline": "Outline", "paint.colorPicker.color": "Color", "paint.colorPicker.saturation": "Saturation", "paint.colorPicker.brightness": "Brightness", "paint.mode.bitmap": "Convert to Bitmap", "paint.mode.tileMap": "Convert to TileMap" };

// packages/paint/src/l10n/zh-hans.yaml
var zh_hans_default = { "paint.contextMenu.duplicate": "复制", "paint.contextMenu.export": "导出", "paint.contextMenu.delete": "删除", "paint.actionButton.upload": "上传图片", "paint.actionButton.uploadCostume": "上传造型", "paint.actionButton.uploadBackdrop": "上传背景", "paint.actionButton.uploadError": "上传“{file}”失败。", "paint.actionButton.surprise": "随机", "paint.actionButton.paint": "绘制", "paint.actionButton.image": "选择一个图片", "paint.actionButton.costume": "选择一个造型", "paint.actionButton.backdrop": "选择一个背景", "paint.painter.image": "图片", "paint.painter.costume": "造型", "paint.painter.backdrop": "背景", "paint.painter.name": "名字", "paint.painter.undo": "撤销", "paint.painter.redo": "重做", "paint.painter.pen": "画笔", "paint.painter.eraser": "橡皮擦", "paint.painter.fill": "填充", "paint.painter.text": "文本", "paint.painter.line": "线段", "paint.painter.curve": "曲线", "paint.painter.rectangle": "矩形", "paint.painter.circle": "圆形", "paint.painter.isogon": "正多边形", "paint.painter.polygon": "任意多边形", "paint.painter.select": "选择", "paint.painter.center": "中心", "paint.painter.outline": "轮廓", "paint.colorPicker.color": "颜色", "paint.colorPicker.saturation": "饱和度", "paint.colorPicker.brightness": "亮度", "paint.mode.bitmap": "转换为位图", "paint.mode.tileMap": "转换为拼贴地图" };

// packages/paint/src/l10n/zh-hant.yaml
var zh_hant_default = { "paint.contextMenu.duplicate": "複製", "paint.contextMenu.export": "導齣", "paint.contextMenu.delete": "刪除", "paint.actionButton.upload": "上傳圖片", "paint.actionButton.uploadCostume": "上傳造型", "paint.actionButton.uploadBackdrop": "上傳背景", "paint.actionButton.uploadError": "上傳“{file}”失敗。", "paint.actionButton.surprise": "隨機", "paint.actionButton.paint": "繪製", "paint.actionButton.image": "選擇一個圖片", "paint.actionButton.costume": "選擇一個造型", "paint.actionButton.backdrop": "選擇一個背景", "paint.painter.image": "圖片", "paint.painter.costume": "造型", "paint.painter.backdrop": "背景", "paint.painter.name": "名字", "paint.painter.undo": "撤銷", "paint.painter.redo": "重做", "paint.painter.pen": "畫筆", "paint.painter.eraser": "橡皮擦", "paint.painter.fill": "填充", "paint.painter.text": "文本", "paint.painter.line": "線段", "paint.painter.curve": "曲線", "paint.painter.rectangle": "矩形", "paint.painter.circle": "圓形", "paint.painter.isogon": "正多邊形", "paint.painter.polygon": "任意多邊形", "paint.painter.select": "選擇", "paint.painter.center": "中心", "paint.painter.outline": "輪廓", "paint.colorPicker.color": "顏色", "paint.colorPicker.saturation": "飽和度", "paint.colorPicker.brightness": "亮度", "paint.mode.bitmap": "轉換爲位圖", "paint.mode.tileMap": "轉換爲 TileMap" };

// packages/paint/src/l10n/index.js
addLocalesMessages({
  en: en_default,
  "zh-Hans": zh_hans_default,
  "zh-Hant": zh_hant_default
});

// packages/paint/src/lib/editor-mode.js
import { keyMirror } from "@blockcode/utils";
var EditorModes = keyMirror({
  Image: null,
  Costume: null,
  Backdrop: null,
  Tile: null,
  TileMap: null
});
// packages/paint/src/lib/load-image.js
var PngType = "image/png";
var PngDataURLHeadLength = `data:${PngType};base64,`.length;
var BlankImageData = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC";
function loadImageFromFile(file, maxSize) {
  return new Promise((resolve) => {
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      const image = new Image;
      image.src = reader.result;
      image.addEventListener("load", () => {
        if (image.dataset.data) {
          return resolve(image);
        }
        let width = image.width;
        let height = image.height;
        if (image.width > size.width || image.height > size.height) {
          width = size.width;
          height = size.height;
          const sw = image.width / size.width;
          const sh = image.height / size.height;
          if (sw > sh) {
            height = image.height / sw;
          } else {
            width = image.width / sh;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(PngType);
        if (dataUrl === "data:,") {
          return resolve(null);
        }
        image.dataset.data = dataUrl.slice(PngDataURLHeadLength);
        image.src = dataUrl;
      });
    });
  });
}
function loadImageFromAsset(asset) {
  return new Promise((resolve) => {
    const image = new Image;
    const dataUrlHead = `data:${asset.type};base64,`;
    image.src = `${dataUrlHead}${asset.data}`;
    image.addEventListener("load", () => {
      image.dataset.data = image.src.slice(dataUrlHead.length);
      resolve(image);
    });
  });
}
function loadImageFromURL(url) {
  return new Promise((resolve) => {
    const image = new Image;
    image.src = url;
    image.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const dataUrl = canvas.toDataURL(PngType);
      image.dataset.data = dataUrl.slice(PngDataURLHeadLength);
      resolve(image);
    });
  });
}
// packages/paint/src/components/selector/selector.jsx
import { useCallback as useCallback2, useMemo } from "preact/hooks";
import { nanoid } from "@blockcode/utils";
import {
  useTranslator,
  useProjectContext,
  translate,
  setAlert,
  delAlert,
  openAsset,
  addAsset,
  delAsset
} from "@blockcode/core";
import { Text, IconSelector, ActionButton } from "@blockcode/core";

// __inject_style__
function __inject_style___default(text) {
  const document2 = globalThis.document;
  const style = document2.createElement("style");
  style.appendChild(document2.createTextNode(text));
  document2.head.append(style);
}

// packages/paint/src/components/selector/selector.module.css
__inject_style___default(".bRLzKG_selector-wrapper{background:var(--ui-secondary);width:150px;position:relative}.bRLzKG_selector-items-wrapper{width:150px;min-height:100%;padding-bottom:100px}.bRLzKG_selector-item{width:5rem;height:5rem;margin:.5rem auto}.bRLzKG_delete-menu-item:hover{background:var(--error-primary)}.bRLzKG_add-button-wrapper{background:linear-gradient(transparent,var(--ui-secondary));width:100%;height:100px;display:flex;position:absolute;bottom:0;left:0;right:0}.bRLzKG_add-button{margin:.75rem auto}");
var selector_module_default = { deleteMenuItem: "bRLzKG_delete-menu-item", addButton: "bRLzKG_add-button", selectorWrapper: "bRLzKG_selector-wrapper", selectorItem: "bRLzKG_selector-item", addButtonWrapper: "bRLzKG_add-button-wrapper", selectorItemsWrapper: "bRLzKG_selector-items-wrapper" };

// packages/paint/src/components/selector/icons/icon-costume.svg
var icon_costume_default = "./assets/icon-costume-zx9m3hdh.svg";

// packages/paint/src/components/selector/icons/icon-backdrop.svg
var icon_backdrop_default = "./assets/icon-backdrop-qvqgzqwj.svg";

// packages/paint/src/components/selector/icons/icon-search.svg
var icon_search_default = "./assets/icon-search-6g8kgvdt.svg";

// packages/paint/src/components/selector/icons/icon-paint.svg
var icon_paint_default = "./assets/icon-paint-0h8zs19a.svg";

// packages/paint/src/components/selector/icons/icon-surprise.svg
var icon_surprise_default = "./assets/icon-surprise-d5t4529a.svg";

// packages/paint/src/components/selector/icons/icon-file-upload.svg
var icon_file_upload_default = "./assets/icon-file-upload-0z25chr6.svg";

// packages/paint/src/components/selector/selector.jsx
import { batch, useComputed, useSignalEffect } from "@preact/signals";
import { jsxDEV } from "preact/jsx-dev-runtime";
var MoreButtonTooltips = {
  [EditorModes.Image]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.image",
    defaultMessage: "Choose a Image"
  }, undefined, false, undefined, this),
  [EditorModes.Costume]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.costume",
    defaultMessage: "Choose a Costume"
  }, undefined, false, undefined, this),
  [EditorModes.Backdrop]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.backdrop",
    defaultMessage: "Choose a Backdrop"
  }, undefined, false, undefined, this)
};
var UploadTooltips = {
  [EditorModes.Image]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.upload",
    defaultMessage: "Upload Image"
  }, undefined, false, undefined, this),
  [EditorModes.Costume]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.uploadCostume",
    defaultMessage: "Upload Costume"
  }, undefined, false, undefined, this),
  [EditorModes.Backdrop]: /* @__PURE__ */ jsxDEV(Text, {
    id: "paint.actionButton.uploadBackdrop",
    defaultMessage: "Upload Backdrop"
  }, undefined, false, undefined, this)
};
var getImageName = (mode, translator) => {
  switch (mode) {
    case EditorModes.Image:
      return translate("paint.painter.image", "Image", translator).toLowerCase();
    case EditorModes.Costume:
      return translate("paint.painter.costume", "Costume", translator).toLowerCase();
    case EditorModes.Backdrop:
      return translate("paint.painter.backdrop", "Backdrop", translator).toLowerCase();
  }
};
var getImageIcon = (image) => `data:${image.type};base64,${image.data}`;
function Selector({ mode, maxSize, onImagesFilter, onShowLibrary, onSurprise, onChange, onDelete }) {
  const translator = useTranslator();
  const { assets, assetId, modified } = useProjectContext();
  const images = useMemo(() => assets.value.filter((res) => /^image\//.test(res.type) && onImagesFilter && onImagesFilter(res)), [modified.value, onImagesFilter]);
  const handleSelect = useCallback2((i) => {
    batch(async () => {
      openAsset(images[i].id);
      if (onChange) {
        onChange(images[i].id);
      }
    });
  }, [images, onChange]);
  const handleUploadFile = useCallback2(() => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.multiple = true;
    fileInput.click();
    fileInput.addEventListener("change", (e) => {
      const alertId = nanoid();
      setAlert("importing", { id: alertId });
      let image, imageId, imageName;
      batch(async () => {
        for (const file of e.target.files) {
          imageId = nanoid();
          imageName = file.name.slice(0, file.name.lastIndexOf("."));
          image = await loadImageFromFile(file, maxSize);
          if (!image) {
            setAlert({
              message: /* @__PURE__ */ jsxDEV(Text, {
                id: "paint.actionButton.uploadError",
                defaultMessage: 'Upload "{file}" failed.',
                file: file.name
              }, undefined, false, undefined, this)
            }, 2000);
            image = {
              dataset: {
                data: BlankImageData
              },
              width: 1,
              height: 1
            };
          }
          addAsset({
            id: imageId,
            type: "image/png",
            name: imageName,
            data: image.dataset.data,
            width: image.width,
            height: image.height,
            centerX: Math.floor(image.width / 2),
            centerY: Math.floor(image.height / 2)
          });
          if (onChange) {
            onChange(imageId);
          }
        }
      });
      delAlert(alertId);
    });
  }, [onChange]);
  const handlePaintImage = useCallback2(() => {
    const imageId = nanoid();
    batch(() => {
      addAsset({
        id: imageId,
        type: "image/png",
        name: getImageName(mode, translator),
        data: BlankImageData,
        width: 1,
        height: 1,
        centerX: 1,
        centerY: 1
      });
      if (onChange) {
        onChange(imageId);
      }
    });
  }, [onChange]);
  const handleDeleteImage = useCallback2((i) => {
    batch(() => {
      delAsset(images[i].id);
      if (onDelete) {
        onDelete(images[i].id);
      }
    });
  }, [images, onDelete]);
  const wrapDeleteImage = useCallback2((i) => () => handleDeleteImage(i), [handleDeleteImage]);
  const wrapDuplicateImage = useCallback2((i) => () => {
    const image = images[i];
    const imageId = nanoid();
    addAsset({
      ...image,
      id: imageId
    });
    if (onChange) {
      onChange(imageId);
    }
  }, [images, onChange]);
  return /* @__PURE__ */ jsxDEV("div", {
    className: selector_module_default.selectorWrapper,
    children: [
      /* @__PURE__ */ jsxDEV(IconSelector, {
        displayOrder: true,
        id: "doodle-selector",
        className: selector_module_default.selectorItemsWrapper,
        items: images.map((image, i) => ({
          ...image,
          details: `${image.width}×${image.height}`,
          icon: getImageIcon(image),
          order: i,
          className: selector_module_default.selectorItem,
          contextMenu: [
            [
              {
                label: /* @__PURE__ */ jsxDEV(Text, {
                  id: "paint.contextMenu.duplicate",
                  defaultMessage: "duplicate"
                }, undefined, false, undefined, this),
                onClick: wrapDuplicateImage(i)
              },
              {
                label: /* @__PURE__ */ jsxDEV(Text, {
                  id: "paint.contextMenu.export",
                  defaultMessage: "export"
                }, undefined, false, undefined, this),
                disabled: true
              }
            ],
            [
              {
                label: /* @__PURE__ */ jsxDEV(Text, {
                  id: "paint.contextMenu.delete",
                  defaultMessage: "delete"
                }, undefined, false, undefined, this),
                className: selector_module_default.deleteMenuItem,
                disabled: images.length <= 1,
                onClick: wrapDeleteImage(i)
              }
            ]
          ]
        })),
        selectedId: assetId.value,
        onSelect: handleSelect,
        onDelete: images.length > 1 && handleDeleteImage
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("div", {
        className: selector_module_default.addButtonWrapper,
        children: /* @__PURE__ */ jsxDEV(ActionButton, {
          tooltipPlacement: "right",
          className: selector_module_default.addButton,
          icon: mode === EditorModes.Costume ? icon_costume_default : icon_backdrop_default,
          tooltip: MoreButtonTooltips[mode],
          onClick: onShowLibrary,
          moreButtons: [
            {
              icon: icon_file_upload_default,
              tooltip: UploadTooltips[mode],
              onClick: handleUploadFile
            },
            {
              icon: icon_surprise_default,
              tooltip: /* @__PURE__ */ jsxDEV(Text, {
                id: "paint.actionButton.surprise",
                defaultMessage: "Surprise"
              }, undefined, false, undefined, this),
              onClick: onSurprise
            },
            {
              icon: icon_paint_default,
              tooltip: /* @__PURE__ */ jsxDEV(Text, {
                id: "paint.actionButton.paint",
                defaultMessage: "Paint"
              }, undefined, false, undefined, this),
              onClick: handlePaintImage
            },
            {
              icon: icon_search_default,
              tooltip: MoreButtonTooltips[mode],
              onClick: onShowLibrary
            }
          ]
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// packages/paint/src/components/painter/painter.jsx
import { useCallback as useCallback7, useEffect as useEffect2, useMemo as useMemo3 } from "preact/hooks";
import { batch as batch2, useComputed as useComputed2, useSignal as useSignal2 } from "@preact/signals";
import { classNames as classNames3, Color as Color2, MathUtils } from "@blockcode/utils";
import { useTranslator as useTranslator2, useProjectContext as useProjectContext3, translate as translate3, maybeTranslate, setAsset as setAsset2 } from "@blockcode/core";
import { Text as Text3, Label, BufferedInput, Button as Button2 } from "@blockcode/core";

// packages/paint/src/components/color-picker/color-picker.jsx
import { useCallback as useCallback3, useMemo as useMemo2 } from "preact/hooks";
import { classNames, Color } from "@blockcode/utils";
import { Text as Text2, Tooltip } from "@blockcode/core";

// packages/paint/src/components/color-picker/color-picker.module.css
__inject_style___default('.x5E0hW_color-picker-wrapper{width:3rem;height:2rem;margin-right:var(--space);cursor:pointer;display:flex}.x5E0hW_color-swatch{border:1px solid var(--ui-black-transparent);border-top-left-radius:var(--form-radius);border-bottom-left-radius:var(--form-radius);flex-shrink:0;flex-basis:2rem;height:100%;display:flex;position:relative}.x5E0hW_color-swatch-outline:after{content:"";background:var(--ui-white);border:1px solid var(--ui-black-transparent);z-index:1;width:.75rem;height:.75rem;position:absolute;top:.5rem;left:.5rem}.x5E0hW_picker-arrow{user-select:none;border:1px solid var(--ui-black-transparent);border-top-right-radius:var(--form-radius);border-bottom-right-radius:var(--form-radius);border-left:0;flex-shrink:0;flex-basis:1rem;justify-content:center;align-items:center;height:100%;font-size:.75rem;display:flex}.x5E0hW_color-tooltip{background:var(--ui-white);color:var(--text-primary);padding:calc(var(--space)/2)}.x5E0hW_tooltip-item{margin:8px}.x5E0hW_tooltip-item-label{font-weight:700}.x5E0hW_tooltip-item-readout{margin-left:10px}.x5E0hW_tooltip-item-slider{border-radius:11px;outline:none;width:150px;height:22px;margin-bottom:20px;position:relative}.x5E0hW_tooltip-item-slider-handler{background-color:var(--ui-white);width:26px;height:26px;box-shadow:0 0 0 4px var(--ui-black-transparent);touch-action:none;border-radius:100%;margin-top:-2px;position:absolute;left:100px}.x5E0hW_tooltip-item-toolbar{justify-content:space-between;display:flex}.x5E0hW_tooltip-item-toolbar-button{border:1px solid var(--ui-black-transparent);border-radius:var(--form-radius);cursor:pointer;width:calc(1.5rem + 2px);height:calc(1.5rem + 2px)}.x5E0hW_tooltip-item-toolbar-button.x5E0hW_selected{border:1px solid #855cd6;box-shadow:0 0 0 3px #855cd659}.x5E0hW_button-icon{width:1.5rem;height:1.5rem}');
var color_picker_module_default = { tooltipItemSlider: "x5E0hW_tooltip-item-slider", tooltipItemToolbar: "x5E0hW_tooltip-item-toolbar", colorPickerWrapper: "x5E0hW_color-picker-wrapper", tooltipItem: "x5E0hW_tooltip-item", tooltipItemReadout: "x5E0hW_tooltip-item-readout", tooltipItemLabel: "x5E0hW_tooltip-item-label", colorTooltip: "x5E0hW_color-tooltip", pickerArrow: "x5E0hW_picker-arrow", tooltipItemToolbarButton: "x5E0hW_tooltip-item-toolbar-button", buttonIcon: "x5E0hW_button-icon", selected: "x5E0hW_selected", tooltipItemSliderHandler: "x5E0hW_tooltip-item-slider-handler", colorSwatchOutline: "x5E0hW_color-swatch-outline", colorSwatch: "x5E0hW_color-swatch" };

// packages/paint/src/components/color-picker/icon-picker.svg
var icon_picker_default = "./assets/icon-picker-2frmfa34.svg";

// packages/paint/src/components/color-picker/icon-clear.svg
var icon_clear_default = "./assets/icon-clear-gctr9axd.svg";

// packages/paint/src/components/color-picker/color-picker.jsx
import { jsxDEV as jsxDEV2, Fragment } from "preact/jsx-dev-runtime";
var HUE = [0, 0, 324, 288, 252, 216, 180, 144, 108, 72, 36, 0, 0];
var SLIDER_MAX_WIDTH = 124;
var getColorObject = (h, s, v, clear) => new Color({ h, s, v }, clear);
var moveSliderHandler = (e, setValue) => {
  e.stopPropagation();
  const target = e.target;
  const left = target.offsetLeft;
  const cx = e.clientX;
  const mouseMove = (e2) => {
    e2.preventDefault();
    let x = e2.clientX - cx + left;
    if (x >= SLIDER_MAX_WIDTH)
      x = SLIDER_MAX_WIDTH;
    if (x <= 0)
      x = 0;
    target.style.left = `${x}px`;
    setValue(x / SLIDER_MAX_WIDTH);
  };
  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
};
var clickSlider = (e, setValue) => {
  const handler = e.target.children[0];
  let x = e.offsetX - 13;
  if (x >= SLIDER_MAX_WIDTH)
    x = SLIDER_MAX_WIDTH;
  if (x <= 0)
    x = 0;
  handler.style.left = `${x}px`;
  setValue(x / SLIDER_MAX_WIDTH);
};
function ColorPicker({ picking, color: defaultColor, outline, onChange, onPickingColor }) {
  const color = defaultColor.hsv.h;
  const saturation = defaultColor.hsv.s;
  const brightness = defaultColor.hsv.v;
  const setColor = useCallback3((value) => onChange(getColorObject(Math.round(value * 360), saturation, brightness)), [saturation, brightness, onChange]);
  const setSaturation = useCallback3((value) => onChange(getColorObject(color, value, brightness)), [color, brightness, onChange]);
  const setBrightness = useCallback3((value) => onChange(getColorObject(color, saturation, value)), [color, saturation, onChange]);
  const handleClear = useCallback3(() => onChange(getColorObject(color, saturation, brightness, true)), [color, saturation, brightness, onChange]);
  const handleColorMouseDown = useCallback3((e) => moveSliderHandler(e, setColor), [setColor]);
  const handleSaturationMouseDown = useCallback3((e) => moveSliderHandler(e, setSaturation), [setSaturation]);
  const handleBrightnessMouseDown = useCallback3((e) => moveSliderHandler(e, setBrightness), [setBrightness]);
  const handleColorClick = useCallback3((e) => clickSlider(e, setColor), [setColor]);
  const handleSaturationClick = useCallback3((e) => clickSlider(e, setSaturation), [setSaturation]);
  const handleBrightnessClick = useCallback3((e) => clickSlider(e, setBrightness), [setBrightness]);
  const hueBackgrounds = useMemo2(() => HUE.map((h) => getColorObject(h, saturation, brightness).hex), [saturation, brightness]);
  return /* @__PURE__ */ jsxDEV2(Tooltip, {
    clickable: true,
    placement: "bottom",
    className: color_picker_module_default.colorTooltip,
    onHide: useCallback3(() => onPickingColor(false), [onPickingColor]),
    content: /* @__PURE__ */ jsxDEV2(Fragment, {
      children: [
        /* @__PURE__ */ jsxDEV2("div", {
          className: color_picker_module_default.tooltipItem,
          children: [
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemLabel,
              children: /* @__PURE__ */ jsxDEV2(Text2, {
                id: "paint.colorPicker.color",
                defaultMessage: "Color"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemReadout,
              children: Math.round(color / 360 * 100)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: classNames(color_picker_module_default.tooltipItem, color_picker_module_default.tooltipItemSlider),
          style: {
            background: `linear-gradient(to left, ${hueBackgrounds[0]} 0px, ${hueBackgrounds[1]} 13px, ${hueBackgrounds[2]}, ${hueBackgrounds[3]}, ${hueBackgrounds[4]}, ${hueBackgrounds[5]}, ${hueBackgrounds[6]}, ${hueBackgrounds[7]}, ${hueBackgrounds[8]}, ${hueBackgrounds[9]}, ${hueBackgrounds[10]}, ${hueBackgrounds[11]} 137px, ${hueBackgrounds[12]} 100%)`
          },
          onClick: handleColorClick,
          children: /* @__PURE__ */ jsxDEV2("div", {
            className: color_picker_module_default.tooltipItemSliderHandler,
            style: {
              left: `${Math.round(color / 360 * SLIDER_MAX_WIDTH)}px`
            },
            onMouseDown: handleColorMouseDown,
            onClick: useCallback3((e) => e.stopPropagation(), [])
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: color_picker_module_default.tooltipItem,
          children: [
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemLabel,
              children: /* @__PURE__ */ jsxDEV2(Text2, {
                id: "paint.colorPicker.saturation",
                defaultMessage: "Saturation"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemReadout,
              children: Math.round(saturation * 100)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: classNames(color_picker_module_default.tooltipItem, color_picker_module_default.tooltipItemSlider),
          style: {
            background: `linear-gradient(to right, ${getColorObject(color, 0, brightness).hex} 0px, ${getColorObject(color, 1, brightness).hex} 100%)`
          },
          onClick: handleSaturationClick,
          children: /* @__PURE__ */ jsxDEV2("div", {
            className: color_picker_module_default.tooltipItemSliderHandler,
            style: {
              left: `${Math.round(saturation * SLIDER_MAX_WIDTH)}px`
            },
            onMouseDown: handleSaturationMouseDown,
            onClick: useCallback3((e) => e.stopPropagation(), [])
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: color_picker_module_default.tooltipItem,
          children: [
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemLabel,
              children: /* @__PURE__ */ jsxDEV2(Text2, {
                id: "paint.colorPicker.brightness",
                defaultMessage: "Brightness"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsxDEV2("span", {
              className: color_picker_module_default.tooltipItemReadout,
              children: Math.round(brightness * 100)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: classNames(color_picker_module_default.tooltipItem, color_picker_module_default.tooltipItemSlider),
          style: {
            background: `linear-gradient(to right, ${getColorObject(color, saturation, 0).hex} 0px, ${getColorObject(color, saturation, 1).hex} 100%)`
          },
          onClick: handleBrightnessClick,
          children: /* @__PURE__ */ jsxDEV2("div", {
            className: color_picker_module_default.tooltipItemSliderHandler,
            style: {
              left: `${Math.round(brightness * SLIDER_MAX_WIDTH)}px`
            },
            onMouseDown: handleBrightnessMouseDown,
            onClick: useCallback3((e) => e.stopPropagation(), [])
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: classNames(color_picker_module_default.tooltipItem, color_picker_module_default.tooltipItemToolbar),
          children: [
            /* @__PURE__ */ jsxDEV2("div", {
              className: classNames(color_picker_module_default.tooltipItemToolbarButton, {
                [color_picker_module_default.selected]: defaultColor.clear
              }),
              onClick: handleClear,
              children: /* @__PURE__ */ jsxDEV2("img", {
                src: icon_clear_default,
                className: color_picker_module_default.buttonIcon
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsxDEV2("div", {
              className: classNames(color_picker_module_default.tooltipItemToolbarButton, {
                [color_picker_module_default.selected]: picking
              }),
              onClick: onPickingColor,
              children: /* @__PURE__ */ jsxDEV2("img", {
                src: icon_picker_default,
                className: color_picker_module_default.buttonIcon
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsxDEV2("div", {
      className: color_picker_module_default.colorPickerWrapper,
      children: [
        /* @__PURE__ */ jsxDEV2("div", {
          className: classNames(color_picker_module_default.colorSwatch, { [color_picker_module_default.colorSwatchOutline]: outline }),
          style: {
            background: defaultColor.clear ? "var(--ui-white)" : getColorObject(color, saturation, brightness).hex
          },
          children: defaultColor.clear && /* @__PURE__ */ jsxDEV2("img", {
            src: icon_clear_default
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV2("div", {
          className: color_picker_module_default.pickerArrow,
          children: "▾"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}

// packages/paint/src/components/tools-box/tools-box.jsx
import { useCallback as useCallback5 } from "preact/hooks";
import { classNames as classNames2, keyMirror as keyMirror2 } from "@blockcode/utils";
import { translate as translate2, Button } from "@blockcode/core";

// packages/paint/src/components/tools-box/tools-box.module.css
__inject_style___default(".a1L2ya_tools-box-wrapper{flex-flow:wrap;place-content:flex-start space-between;width:6rem;display:flex}.a1L2ya_small{width:3rem}.a1L2ya_tool-button{margin:calc(var(--space)/2);border-radius:calc(var(--space)/2);padding:calc(var(--space)/2);user-select:none;background:0 0;border:none;outline:none;transition:all .2s;display:inline-block}.a1L2ya_tool-button.a1L2ya_selected{background:var(--theme-primary)}.a1L2ya_tool-icon{vertical-align:middle;width:2rem;height:2rem}.a1L2ya_tool-button.a1L2ya_selected .a1L2ya_tool-icon{filter:brightness(0)invert()}");
var tools_box_module_default = { small: "a1L2ya_small", toolButton: "a1L2ya_tool-button", toolsBoxWrapper: "a1L2ya_tools-box-wrapper", toolIcon: "a1L2ya_tool-icon", selected: "a1L2ya_selected" };

// packages/paint/src/components/tools-box/icons/icon-pen.svg
var icon_pen_default = "./assets/icon-pen-vmav54fy.svg";

// packages/paint/src/components/tools-box/icons/icon-eraser.svg
var icon_eraser_default = "./assets/icon-eraser-6exvhk0q.svg";

// packages/paint/src/components/tools-box/icons/icon-fill.svg
var icon_fill_default = "./assets/icon-fill-70s8y3f8.svg";

// packages/paint/src/components/tools-box/icons/icon-text.svg
var icon_text_default = "./assets/icon-text-e5hysycg.svg";

// packages/paint/src/components/tools-box/icons/icon-line.svg
var icon_line_default = "./assets/icon-line-r61p9edw.svg";

// packages/paint/src/components/tools-box/icons/icon-curve.svg
var icon_curve_default = "./assets/icon-curve-sngqpytw.svg";

// packages/paint/src/components/tools-box/icons/icon-rectangle.svg
var icon_rectangle_default = "./assets/icon-rectangle-yasy0y9k.svg";

// packages/paint/src/components/tools-box/icons/icon-circle.svg
var icon_circle_default = "./assets/icon-circle-ynejmr8k.svg";

// packages/paint/src/components/tools-box/icons/icon-isogon.svg
var icon_isogon_default = "./assets/icon-isogon-dhadjxez.svg";

// packages/paint/src/components/tools-box/icons/icon-polygon.svg
var icon_polygon_default = "./assets/icon-polygon-d2x4vbt9.svg";

// packages/paint/src/components/tools-box/icons/icon-select.svg
var icon_select_default = "./assets/icon-select-7g007t5g.svg";

// packages/paint/src/components/tools-box/tools-box.jsx
import { jsxDEV as jsxDEV3 } from "preact/jsx-dev-runtime";
var PaintTools = keyMirror2({
  Pen: null,
  Eraser: null,
  Fill: null,
  Text: null,
  Line: null,
  Curve: null,
  Rectangle: null,
  Circle: null,
  Isogon: null,
  Polygon: null,
  Selector: null,
  Center: null,
  ColorPicker: null,
  OutlineColorPicker: null
});
function ToolsBox({ small, paintTool, onSelect }) {
  return /* @__PURE__ */ jsxDEV3("div", {
    className: classNames2(tools_box_module_default.toolsBoxWrapper, {
      [tools_box_module_default.small]: small
    }),
    children: [
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Pen
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Pen), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_pen_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.pen", "Pen")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Eraser
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Eraser), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_eraser_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.eraser", "Eraser")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Fill
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Fill), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_fill_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.fill", "Fill")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Text
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Text), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_text_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.text", "Text")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Line
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Line), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_line_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.line", "Line")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Curve
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Curve), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_curve_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.curve", "Curve")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Rectangle
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Rectangle), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_rectangle_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.rectangle", "Rectangle")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Circle
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Circle), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_circle_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.circle", "Circle")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Isogon
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Isogon), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_isogon_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.isogon", "Isogon")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Polygon
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Polygon), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_polygon_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.polygon", "Polygon")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3(Button, {
        className: classNames2(tools_box_module_default.toolButton, {
          [tools_box_module_default.selected]: paintTool === PaintTools.Selector
        }),
        onClick: useCallback5(() => onSelect(PaintTools.Selector), []),
        children: /* @__PURE__ */ jsxDEV3("img", {
          src: icon_select_default,
          className: tools_box_module_default.toolIcon,
          title: translate2("paint.painter.select", "Select")
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// packages/paint/src/components/draw-box/draw-box.jsx
import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Konva as Konva4, keyMirror as keyMirror3 } from "@blockcode/utils";
import { useProjectContext as useProjectContext2, setAsset } from "@blockcode/core";
import { Keys } from "@blockcode/core/io";

// packages/paint/src/lib/get-bounding-box.js
var getTop = (imageData) => {
  let i;
  for (let y = 0;y < imageData.height; y++) {
    i = y * imageData.width;
    for (let x = 0;x < imageData.width; x++) {
      if (imageData.data[(i << 2) + 3] !== 0) {
        return y;
      }
      i++;
    }
  }
  return 0;
};
var getBottom = (imageData, top) => {
  let i;
  for (let y = imageData.height - 1;y >= top; y--) {
    i = y * imageData.width;
    for (let x = 0;x < imageData.width; x++) {
      if (imageData.data[(i << 2) + 3] !== 0) {
        return y;
      }
      i++;
    }
  }
  return 0;
};
var getLeft = (imageData, top, bottom) => {
  let i;
  for (let x = 0;x < imageData.width; x++) {
    for (let y = top;y <= bottom; y++) {
      i = y * imageData.width + x;
      if (imageData.data[(i << 2) + 3] !== 0) {
        return x;
      }
    }
  }
  return 0;
};
var getRight = (imageData, top, bottom, left) => {
  let i;
  for (let x = imageData.width - 1;x >= left; x--) {
    for (let y = top;y <= bottom; y++) {
      i = y * imageData.width + x;
      if (imageData.data[(i << 2) + 3] !== 0) {
        return x;
      }
    }
  }
  return 0;
};
function getBoundingBox(imageData) {
  const top = getTop(imageData);
  const bottom = getBottom(imageData, top);
  const left = getLeft(imageData, top, bottom);
  const right = getRight(imageData, top, bottom, left);
  return {
    top,
    left,
    right,
    bottom,
    x: left,
    y: top,
    width: right - left + 1,
    height: bottom - top + 1
  };
}

// packages/paint/src/lib/create-image.js
var PngType2 = "image/png";
var PngDataURLHeadLength2 = `data:${PngType2};base64,`.length;
function createImageFromLayer(layer, center) {
  const width = layer.width();
  const height = layer.height();
  const ctx = layer.getContext();
  const imageData = ctx.getImageData(0, 0, width, height);
  const boundingBox = getBoundingBox(imageData);
  const dataUrl = layer.toDataURL({
    ...boundingBox,
    mimeType: PngType2
  });
  const data = dataUrl.slice(PngDataURLHeadLength2);
  const centerX = center.x - boundingBox.x;
  const centerY = center.y - boundingBox.y;
  return { data, centerX, centerY };
}

// packages/paint/src/components/draw-box/draw-box.module.css
__inject_style___default(".vAiLFq_draw-box{background:var(--ui-secondary);width:100%;height:100%;display:flex;position:relative;overflow:hidden}.vAiLFq_draw-container{image-rendering:pixelated;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMzAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Zz4KPHBhdGggZD0iTTAgMEw0MCAwTDQwIDQwTDAgNDBMMCAwWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTAgMEwyMCAwTDIwIDIwTDAgMjBMMCAwWiIgZmlsbD0iI2VhZjBmOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIwIDIwTDQwIDIwTDQwIDQwTDIwIDQwTDIwIDIwWiIgZmlsbD0iI2VhZjBmOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K);margin:0;padding:0;position:absolute;inset:0;overflow:auto}.vAiLFq_draw-canvas.vAiLFq_center{cursor:crosshair}.vAiLFq_draw-canvas.vAiLFq_picker{cursor:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZXllLWRyb3BwZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZXllLWRyb3BwZXIiIGZpbGw9IiM1NzVFNzUiPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4xNTMzNDYwNSwxMi40ODI0OTYyIEM5LjAzMzk0MDQ0LDEyLjYxODg3MzcgOC44ODA0MTg5NSwxMi43MDQxMDk2IDguNjA3NDkxODYsMTIuNzcyMjk4MyBDNy45MDgxMTYxOCwxMi45MjU3MjMgNy4yNDI4NTYzOSwxMy41NTY0Njg4IDcuMDM4MTYxMDcsMTQuMjU1NDAzMyBDNi45Njk5MjkzLDE0LjQ3NzAxNjcgNi43NDgxNzYwMywxNC43MTU2NzczIDYuNTA5MzY0ODMsMTQuODM1MDA3NiBMNC43MzUzMzg3MSwxNS42NzAzMTk2IEM0LjY1MDA0OSwxNS43MDQ0MTQgNC41ODE4MTcyMiwxNS43MjE0NjEyIDQuNTQ3NzAxMzQsMTUuNzIxNDYxMiBMNC4yNzQ3NzQyNCwxNS40NjU3NTM0IEM0LjI3NDc3NDI0LDE1LjQ0ODcwNjIgNC4yNzQ3NzQyNCwxNS4zODA1MTc1IDQuMzI1OTQ4MDcsMTUuMjYxMTg3MiBMNS4xNjE3ODczLDEzLjQ3MTIzMjkgQzUuMjY0MTM0OTYsMTMuMjQ5NjE5NSA1LjUwMjk0NjE3LDEzLjAyODAwNjEgNS43NDE3NTczNywxMi45NTk4MTc0IEM2LjQ0MTEzMzA1LDEyLjczODIwNCA3LjA3MjI3Njk2LDEyLjA5MDQxMSA3LjI1OTkxNDMzLDExLjIzODA1MTggQzcuMjk0MDMwMjIsMTEuMTAxNjc0MyA3LjM3OTMxOTk0LDEwLjk2NTI5NjggNy40OTg3MjU1NCwxMC44Mjg5MTkzIEwxMS40MzkxMTA1LDYuOTA4MDY2OTcgTDEzLjA5MzczMSw4LjU2MTY0Mzg0IEw5LjE1MzM0NjA1LDEyLjQ4MjQ5NjIgWiBNMTYuNjA3NjY3Myw1LjI4ODU4NDQ3IEMxNi44NjM1MzY1LDUuMDMyODc2NzEgMTcsNC42NzQ4ODU4NCAxNyw0LjMzMzk0MjE2IEMxNywzLjk5Mjk5ODQ4IDE2Ljg2MzUzNjUsMy42NTIwNTQ3OSAxNi42MDc2NjczLDMuMzk2MzQ3MDMgQzE2LjA3ODg3MTEsMi44Njc4ODQzMiAxNS4yNDMwMzE4LDIuODY3ODg0MzIgMTQuNzE0MjM1NiwzLjM5NjM0NzAzIEwxMy4yMzAxOTQ1LDQuODc5NDUyMDUgTDEzLjA1OTYxNTEsNC43MDg5ODAyMSBMMTIuNTEzNzYwOSw0LjE2MzQ3MDMyIEMxMi4xNzI2MDIsMy44MjI1MjY2NCAxMS42MDk2ODk5LDMuODIyNTI2NjQgMTEuMjY4NTMxLDQuMTYzNDcwMzIgTDEwLjYwMzI3MTIsNC44MTEyNjMzMiBDMTAuMjc5MTcwMyw1LjE1MjIwNyAxMC4yNjIxMTI0LDUuNjQ2NTc1MzQgMTAuNTUyMDk3NCw1Ljk4NzUxOTAzIEw2LjU5NDY1NDU0LDkuOTI1NDE4NTcgQzYuMzA0NjY5NTEsMTAuMjMyMjY3OSA2LjA5OTk3NDE4LDEwLjU5MDI1ODggNS45ODA1Njg1OCwxMS4xMDE2NzQzIEM1LjkyOTM5NDc1LDExLjM1NzM4MiA1LjYzOTQwOTcxLDExLjY0NzE4NDIgNS4zNjY0ODI2MiwxMS43MzI0MjAxIEM0LjgwMzU3MDQ5LDExLjkwMjg5MTkgNC4yNTc3MTYzLDEyLjM4MDIxMzEgNC4wMDE4NDcxNSwxMi45NDI3NzAyIEwzLjE2NjAwNzkyLDE0LjcxNTY3NzMgQzIuODkzMDgwODMsMTUuMzEyMzI4OCAyLjk2MTMxMjYsMTUuOTI2MDI3NCAzLjMzNjU4NzM2LDE2LjMxODExMjYgTDMuNjc3NzQ2MjMsMTYuNjU5MDU2MyBDMy44OTk0OTk0OSwxNi44ODA2Njk3IDQuMjA2NTQyNDcsMTcgNC41NDc3MDEzNCwxNyBDNC43Njk0NTQ2LDE3IDUuMDI1MzIzNzUsMTYuOTMxODExMyA1LjI2NDEzNDk2LDE2LjgyOTUyODIgTDcuMDU1MjE5MDEsMTUuOTk0MjE2MSBDNy42MTgxMzExNCwxNS43MjE0NjEyIDguMDk1NzUzNTYsMTUuMTkyOTk4NSA4LjI2NjMzMjk5LDE0LjYzMDQ0MTQgQzguMzM0NTY0NzcsMTQuMzU3Njg2NSA4LjY0MTYwNzc1LDE0LjA2Nzg4NDMgOS4wNTA5OTgzOSwxMy45ODI2NDg0IEM5LjQwOTIxNTIsMTMuODk3NDEyNSA5Ljc2NzQzMjAxLDEzLjY5Mjg0NjMgMTAuMDU3NDE3LDEzLjM4NTk5NyBMMTQuMDE0ODU5OSw5LjQ0ODA5NzQxIEMxNC4zNTYwMTg4LDkuNzM3ODk5NTQgMTQuODY3NzU3MSw5LjcwMzgwNTE4IDE1LjE3NDgwMDEsOS4zNzk5MDg2OCBMMTUuODQwMDU5OSw4LjczMjExNTY4IEMxNi4xODEyMTg3LDguMzkxMTcxOTkgMTYuMTgxMjE4Nyw3LjgyODYxNDkyIDE1Ljg0MDA1OTksNy40ODc2NzEyMyBMMTUuMjYwMDg5OCw2LjkwODA2Njk3IEwxNS4xMjM2MjYyLDYuNzcxNjg5NSBMMTYuNjA3NjY3Myw1LjI4ODU4NDQ3IFoiIGlkPSJleWUtZHJvcHBlci1pY29uIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) 4 15,crosshair}.vAiLFq_center-icon{pointer-events:none;filter:opacity(.5);position:absolute;top:0;left:0;transform:translate(-50%,-50%)}.vAiLFq_center-icon.vAiLFq_hidden{display:none}");
var draw_box_module_default = { picker: "vAiLFq_picker", centerIcon: "vAiLFq_center-icon", hidden: "vAiLFq_hidden", drawContainer: "vAiLFq_draw-container", center: "vAiLFq_center", drawBox: "vAiLFq_draw-box", drawCanvas: "vAiLFq_draw-canvas" };

// packages/paint/src/components/draw-box/tools/pen.js
import { Konva } from "@blockcode/utils";
var pen_default = {
  setup(layer, options) {
    this.stage = layer.getStage();
    this.layer = layer;
    this.size = options.size;
    this.color = options.color;
  },
  onBegin(e) {
    if (this.color.clear)
      return;
    const pos = this.stage.getPointerPosition();
    this.poly = new Konva.Line({
      stroke: this.color.hex,
      strokeWidth: this.size,
      globalCompositeOperation: this.isEraser ? "destination-out" : "source-over",
      lineCap: "round",
      lineJoin: "round",
      points: [pos.x, pos.y, pos.x, pos.y]
    });
    this.layer.add(this.poly);
  },
  onDrawing(e) {
    if (!this.poly)
      return;
    const pos = this.stage.getPointerPosition();
    const points = this.poly.points().concat([pos.x, pos.y]);
    this.poly.points(points);
  },
  onEnd(e) {
    this.poly = null;
  }
};

// packages/paint/src/components/draw-box/tools/eraser.js
var eraser_default = {
  ...pen_default,
  isEraser: true
};

// packages/paint/src/components/draw-box/tools/line.js
import { Konva as Konva2 } from "@blockcode/utils";
var line_default = {
  setup(layer, options) {
    this.stage = layer.getStage();
    this.layer = layer;
    this.size = options.size;
    this.color = options.color;
  },
  onBegin(e) {
    if (this.color.clear)
      return;
    const pos = this.stage.getPointerPosition();
    this.poly = new Konva2.Line({
      stroke: this.color.hex,
      strokeWidth: this.size,
      lineCap: "round",
      lineJoin: "round",
      points: [pos.x, pos.y]
    });
    this.layer.add(this.poly);
  },
  onDrawing(e) {
    if (!this.poly)
      return;
    const pos = this.stage.getPointerPosition();
    const points = this.poly.points();
    points[2] = pos.x;
    points[3] = pos.y;
    this.poly.points(points);
  },
  onEnd(e) {
    this.poly = null;
  }
};

// packages/paint/src/components/draw-box/tools/rectangle.js
import { Konva as Konva3 } from "@blockcode/utils";
var rectangle_default = {
  setup(layer, options) {
    this.stage = layer.getStage();
    this.layer = layer;
    this.color = options.color;
    this.outlineWidth = options.outlineWidth;
    this.outlineColor = options.outlineColor;
  },
  onBegin(e) {
    if (this.color.clear && this.outlineColor.clear)
      return;
    const pos = this.stage.getPointerPosition();
    this.poly = new Konva3.Rect({
      name: "selector",
      x: pos.x,
      y: pos.y,
      width: 1,
      height: 1,
      lineCap: "round",
      lineJoin: "round",
      fill: this.color.clear ? "transparent" : this.color.hex,
      stroke: this.outlineWidth === 0 || this.outlineColor.clear ? "transparent" : this.outlineColor.hex,
      strokeWidth: this.outlineColor.clear ? 0 : this.outlineWidth
    });
    this.layer.add(this.poly);
  },
  onDrawing(e) {
    if (!this.poly)
      return;
    const pos = this.stage.getPointerPosition();
    const x = this.poly.x();
    const y = this.poly.y();
    const width = pos.x - x;
    const height = pos.y - y;
    this.poly.setAttrs({
      width: Math.abs(width),
      height: Math.abs(height),
      scale: {
        x: width < 0 ? -1 : 1,
        y: height < 0 ? -1 : 1
      }
    });
  },
  onEnd(e) {
    if (!this.poly)
      return;
    const size2 = this.poly.size();
    if (size2.width < 6 && size2.height < 6) {
      this.poly.remove();
    } else {
      this.poly.draggable(true);
    }
    this.poly = null;
  }
};

// packages/paint/src/components/painter/icons/icon-center.svg
var icon_center_default = "./assets/icon-center-bzxv0qgf.svg";

// packages/paint/src/components/draw-box/draw-box.jsx
import { jsxDEV as jsxDEV4 } from "preact/jsx-dev-runtime";
var Tools = {
  [PaintTools.Pen]: pen_default,
  [PaintTools.Eraser]: eraser_default,
  [PaintTools.Line]: line_default,
  [PaintTools.Rectangle]: rectangle_default
};
function DrawBox({ zoom, maxSize, toolOptions, onSizeChange }) {
  const ref = useRef(null);
  const { asset, assetId, modified } = useProjectContext2();
  const tool = useSignal(null);
  const offset = useSignal({ x: 0.5, y: 0.5 });
  const updateImage = useCallback(() => {
    const pos = ref.image.position();
    const image = createImageFromLayer(ref.drawLayer, {
      x: pos.x + asset.value.centerX,
      y: pos.y + asset.value.centerY
    });
    setAsset(image);
  }, []);
  const createSelector = useCallback4(() => {
    const shapes = ref.stage.find(".selector");
    if (shapes.length > 0) {
      ref.selector.zIndex(ref.drawLayer.children.length - 1);
      ref.selector.nodes(shapes);
    } else {
      updateImage();
    }
  }, []);
  const clearSelector = useCallback4(() => {
    if (ref.selector.nodes().length > 0) {
      ref.selector.nodes([]);
      updateImage();
    }
  }, []);
  const clearDrawable = useCallback4(() => {
    ref.selector.nodes([]);
    for (let child of ref.drawLayer.children) {
      if (child === ref.image || child instanceof Konva4.Transformer)
        continue;
      child.remove();
    }
  }, []);
  const handleKeyDown = useCallback4((e) => {
    switch (e.code) {
      case Keys.ESC:
      case Keys.DELETE:
      case Keys.BACKSPACE:
        clearDrawable();
        return;
      case Keys.RETURN:
      case Keys.ENTER:
        clearSelector();
        return;
      case Keys.LEFT:
        ref.selector.nodes().forEach((node) => node.x(node.x() - 1));
        return;
      case Keys.RIGHT:
        ref.selector.nodes().forEach((node) => node.x(node.x() + 1));
        return;
      case Keys.UP:
        ref.selector.nodes().forEach((node) => node.y(node.y() - 1));
        return;
      case Keys.DOWN:
        ref.selector.nodes().forEach((node) => node.y(node.y() + 1));
        return;
    }
  }, []);
  useEffect(async () => {
    if (!/image\//.test(asset.value?.type) || !ref.image)
      return;
    const image = await loadImageFromAsset(asset.value);
    ref.image.image(image);
    ref.image.position({
      x: ref.stage.width() / 2 - asset.value.centerX,
      y: ref.stage.height() / 2 - asset.value.centerY
    });
    clearDrawable();
  }, [assetId.value, modified.value]);
  useEffect(() => {
    if (ref.stage) {
      ref.stage.content.style.zoom = zoom;
      const { clientWidth, clientHeight } = ref.current;
      const { clientWidth: contentWidth, clientHeight: contentHeight } = ref.stage.content;
    }
  }, [zoom]);
  useEffect(() => {
    if (ref.drawLayer) {
      if (tool.value?.type !== toolOptions.type) {
        if (ref.painting) {
          ref.painting = false;
          updateImage();
        }
        clearSelector();
        tool.value = Tools[toolOptions.type];
        if (tool.value) {
          tool.value.type = toolOptions.type;
        }
      }
      tool.value?.setup?.(ref.drawLayer, toolOptions);
    }
  }, [toolOptions]);
  useEffect(() => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      const stageWidth = Math.max(maxSize.width, clientWidth);
      const stageHeight = Math.max(maxSize.height, clientHeight);
      ref.stage = new Konva4.Stage({
        container: ref.current,
        width: stageWidth,
        height: stageWidth
      });
      onSizeChange({ width: clientWidth, height: clientHeight });
      const maskLayer = new Konva4.Layer({ listening: false });
      ref.drawLayer = new Konva4.Layer;
      ref.stage.add(ref.drawLayer, maskLayer);
      const maskWidth = (stageWidth - maxSize.width) / 2;
      const maskHeight = (stageHeight - maxSize.height) / 2;
      const topMask = new Konva4.Rect({
        x: 0,
        y: 0,
        width: stageWidth,
        height: maskHeight,
        fill: "black",
        opacity: 0.2
      });
      const bottomMask = new Konva4.Rect({
        x: 0,
        y: stageHeight - maskHeight,
        width: clientWidth,
        height: maskHeight,
        fill: "black",
        opacity: 0.2
      });
      const leftMask = new Konva4.Rect({
        x: 0,
        y: maskHeight,
        width: maskWidth,
        height: maxSize.height,
        fill: "black",
        opacity: 0.2
      });
      const rightMask = new Konva4.Rect({
        x: stageWidth - maskWidth,
        y: maskHeight,
        width: maskWidth,
        height: maxSize.height,
        fill: "black",
        opacity: 0.2
      });
      maskLayer.add(topMask, bottomMask, leftMask, rightMask);
      ref.selector = new Konva4.Transformer;
      ref.drawLayer.add(ref.selector);
      ref.image = new Konva4.Image;
      ref.drawLayer.add(ref.image);
      if (asset.value) {
        loadImageFromAsset(asset.value).then((image) => {
          ref.image.image(image);
          ref.image.position({
            x: ref.stage.width() / 2 - asset.value.centerX,
            y: ref.stage.height() / 2 - asset.value.centerY
          });
        });
      }
      ref.painting = false;
      ref.stage.on("mousedown touchstart", (e) => {
        if (ref.painting || e.target.name() === "selector" || e.target.parent instanceof Konva8.Transformer) {
          return;
        }
        if (tool.value?.type === PaintTools.ColorPicker || tool.value?.type === PaintTools.OutlineColorPicker) {
          e.evt.stopPropagation();
        }
        clearSelector();
        if (tool.value) {
          ref.painting = true;
          tool.value.onBegin?.(e);
        }
      });
      ref.stage.on("mousemove touchmove", (e) => {
        if (ref.painting) {
          e.evt.preventDefault();
          tool.value.onDrawing?.(e);
        }
      });
      ref.stage.on("mouseup touchend", async (e) => {
        if (ref.painting) {
          await tool.value.onEnd?.(e);
          if (!tool.value.onDone) {
            ref.painting = false;
            createSelector();
          }
        }
      });
      ref.stage.on("dblclick dbltap ", async (e) => {
        if (ref.painting) {
          await tool.value.onDone?.(e);
          ref.painting = false;
          createSelector();
        }
      });
      document.addEventListener("keydown", handleKeyDown);
      ref.resizeObserver = new ResizeObserver(() => {
        if (!ref.stage)
          return;
        const { clientWidth: clientWidth2, clientHeight: clientHeight2 } = ref.current;
        const stageWidth2 = Math.max(maxSize.width, clientWidth2);
        const stageHeight2 = Math.max(maxSize.height, clientHeight2);
        ref.stage.size({
          width: stageWidth2,
          height: stageHeight2
        });
        onSizeChange({ width: clientWidth2, height: clientHeight2 });
        ref.image.position({
          x: stageWidth2 / 2 - asset.value.centerX,
          y: stageHeight2 / 2 - asset.value.centerY
        });
        const maskWidth2 = (stageWidth2 - maxSize.width) / 2;
        const maskHeight2 = (stageHeight2 - maxSize.height) / 2;
        topMask.size({
          width: stageWidth2,
          height: maskHeight2
        });
        bottomMask.setAttrs({
          y: stageHeight2 - maskHeight2,
          width: stageWidth2,
          height: maskHeight2
        });
        leftMask.setAttrs({
          y: maskHeight2,
          width: maskWidth2
        });
        rightMask.setAttrs({
          x: stageWidth2 - maskWidth2,
          y: maskHeight2,
          width: maskWidth2
        });
      });
      ref.resizeObserver.observe(ref.current);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      ref.resizeObserver.unobserve(ref.current);
      ref.stage.destroy();
    };
  }, [ref]);
  return /* @__PURE__ */ jsxDEV4("div", {
    className: draw_box_module_default.drawBox,
    children: /* @__PURE__ */ jsxDEV4("div", {
      ref,
      className: draw_box_module_default.drawContainer
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}

// packages/paint/src/components/painter/painter.module.css
__inject_style___default("._03BnxG_painter-wrapper{padding:calc(var(--space)*1.5);border-left:1px solid var(--ui-black-transparent);color:var(--text-primary);flex-direction:column;flex:1;display:flex}._03BnxG_row{min-height:3rem;margin-bottom:.5rem;display:flex}._03BnxG_row-fill{padding-top:calc(var(--space)*2.5);border-top:1px dashed var(--ui-black-transparent);flex-direction:row;flex:1}._03BnxG_row-bottom{margin-right:var(--space);margin-left:calc(7em + var(--space));justify-content:space-between}._03BnxG_row-bottom>div{display:inline-flex}._03BnxG_row:last-child{min-height:unset;margin-bottom:0}._03BnxG_tool-group{margin-right:calc(var(--space)*1.5);flex-direction:row;align-items:center;display:inline-flex}._03BnxG_disabled{opacity:.3;pointer-events:none}._03BnxG_dashed-border{border-right:1px dashed var(--ui-black-transparent);padding-right:var(--space)}._03BnxG_name-input{width:8rem}._03BnxG_large-input{width:4rem}._03BnxG_tool-icon{margin-right:var(--space);width:2rem;height:2rem}._03BnxG_label-image{vertical-align:middle;margin-right:calc(var(--space)/2)}._03BnxG_button{width:calc(2rem + 2px);height:calc(2rem + 2px);padding:.375rem}._03BnxG_tile-map-button{background:var(--theme-primary);border:var(--theme-primary);color:var(--ui-white);height:calc(2rem + 2px);padding:.375rem}._03BnxG_button-left-icon{margin-right:calc(var(--space))}._03BnxG_button-icon{width:1.5rem;margin:auto}._03BnxG_group-button{border-left:none;border-radius:0}._03BnxG_group-button-first{border-top-right-radius:0;border-bottom-right-radius:0}._03BnxG_group-button-last{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}._03BnxG_group-button-toggled-off{filter:saturate(0)}._03BnxG_label-button{border:0;font-weight:400}._03BnxG_label-button._03BnxG_selected{background:var(--theme-primary);color:var(--ui-white)}._03BnxG_label-button._03BnxG_selected ._03BnxG_button-icon{filter:brightness(0)invert()}._03BnxG_draw-box-wrapper{margin:0 var(--space);border:1px solid var(--ui-black-transparent);border-radius:calc(var(--space)/2);flex:1;position:relative;overflow:hidden}");
var painter_module_default = { nameInput: "_03BnxG_name-input", buttonIcon: "_03BnxG_button-icon", selected: "_03BnxG_selected", toolGroup: "_03BnxG_tool-group", groupButton: "_03BnxG_group-button", groupButtonToggledOff: "_03BnxG_group-button-toggled-off", rowFill: "_03BnxG_row-fill", painterWrapper: "_03BnxG_painter-wrapper", rowBottom: "_03BnxG_row-bottom", dashedBorder: "_03BnxG_dashed-border", groupButtonLast: "_03BnxG_group-button-last", labelImage: "_03BnxG_label-image", groupButtonFirst: "_03BnxG_group-button-first", toolIcon: "_03BnxG_tool-icon", drawBoxWrapper: "_03BnxG_draw-box-wrapper", largeInput: "_03BnxG_large-input", labelButton: "_03BnxG_label-button", buttonLeftIcon: "_03BnxG_button-left-icon", disabled: "_03BnxG_disabled", tileMapButton: "_03BnxG_tile-map-button", button: "_03BnxG_button", row: "_03BnxG_row" };

// packages/paint/src/components/painter/icons/icon-undo.svg
var icon_undo_default = "./assets/icon-undo-q4nwvpxj.svg";

// packages/paint/src/components/painter/icons/icon-redo.svg
var icon_redo_default = "./assets/icon-redo-mrvqwv38.svg";

// packages/paint/src/components/painter/icons/icon-zoom-in.svg
var icon_zoom_in_default = "./assets/icon-zoom-in-s316e3qy.svg";

// packages/paint/src/components/painter/icons/icon-zoom-out.svg
var icon_zoom_out_default = "./assets/icon-zoom-out-y9xmwx8c.svg";

// packages/paint/src/components/painter/icons/icon-zoom-reset.svg
var icon_zoom_reset_default = "./assets/icon-zoom-reset-xne8n5sw.svg";

// packages/paint/src/components/painter/icons/icon-tilemap.svg
var icon_tilemap_default = "./assets/icon-tilemap-m9n9bthp.svg";

// packages/paint/src/components/painter/painter.jsx
import { jsxDEV as jsxDEV5 } from "preact/jsx-dev-runtime";
var UNDO_MAX_LENGTH = 30;
var ZOOM_STEP = 0.5;
var ZOOM_MAX = 20;
var getImageName2 = (mode, translator) => {
  switch (mode) {
    case EditorModes.Image:
      return translate3("paint.painter.image", "Image", translator).toLowerCase();
    case EditorModes.Costume:
      return translate3("paint.painter.costume", "Costume", translator).toLowerCase();
    case EditorModes.Backdrop:
      return translate3("paint.painter.backdrop", "Backdrop", translator).toLowerCase();
  }
};
function Painter({ mode, maxSize }) {
  const translator = useTranslator2();
  const { asset, assetId, modified } = useProjectContext3();
  const zoom = useSignal2(1);
  const smallToolsBox = useSignal2(false);
  const toolMode = useSignal2(null);
  const paintTool = useSignal2(PaintTools.Pen);
  const penSize = useSignal2(10);
  const outlineWidth = useSignal2(2);
  const isogonSides = useSignal2(6);
  const fillColor = useSignal2(new Color2([260, 0.6, 1]));
  const outlineColor = useSignal2(new Color2([0, 1, 0]));
  const undoStack = useSignal2([]);
  const redoStack = useSignal2([]);
  const imageName = useMemo3(() => asset.value?.name, [assetId.value, modified.value]);
  const disabled = !/image\//.test(asset.value?.type);
  const outlineDisabled = useComputed2(() => paintTool.value !== PaintTools.Rectangle && paintTool.value !== PaintTools.Circle && paintTool.value !== PaintTools.Isogon && paintTool.value !== PaintTools.Polygon);
  const penSizeEnabled = useComputed2(() => paintTool.value === PaintTools.Pen || paintTool.value === PaintTools.Eraser || paintTool.value === PaintTools.Line || paintTool.value === PaintTools.Curve);
  const penSizeIcon = useComputed2(() => {
    if (paintTool.value === PaintTools.Eraser) {
      return icon_eraser_default;
    }
    if (paintTool.value === PaintTools.Line) {
      return icon_line_default;
    }
    if (paintTool.value === PaintTools.Curve) {
      return icon_curve_default;
    }
    return icon_pen_default;
  });
  useEffect2(() => {
    batch2(() => {
      undoStack.value.length = 0;
      redoStack.value.length = 0;
      toolMode.value = null;
    });
    return () => {
    };
  }, [assetId]);
  const handleChange = (data) => {
    if (!data)
      return;
    batch2(() => {
      if (undoStack.value.length > UNDO_MAX_LENGTH) {
        undoStack.shift();
      }
      undoStack.value.push(data);
      redoStack.value.length = 0;
    });
  };
  const handleChangeName = useCallback7((name) => {
    setAsset2({ name });
  }, []);
  const wrapPickingColor = useCallback7((picker) => (picking) => {
    if (picking) {
      toolMode.value = picker;
    } else {
      toolMode.value = null;
    }
  }, []);
  const handlePickColor = useCallback7((color) => {
    if (toolMode.value === PaintTools.ColorPicker) {
      fillColor.value = color;
    } else if (toolMode.value === PaintTools.OutlineColorPicker) {
      outlineColor.value = color;
    }
  }, []);
  const handleOutlineWidthChange = useCallback7((val) => {
    outlineWidth.value = MathUtils.clamp(val, 0, 100);
  }, []);
  const handlePanSizeChange = useCallback7((val) => penSize.value = MathUtils.clamp(val, 1, 100), []);
  const handleIsogonEdgesChange = useCallback7((val) => isogonSides.value = MathUtils.clamp(val, 3, 20), []);
  const handleUndo = useCallback7(() => {
    batch2(() => {
      const data = undoStack.value.pop();
      redoStack.value.push(data);
    });
  }, []);
  const handleRedo = useCallback7(() => {
    batch2(() => {
      const data = redoStack.value.pop();
      undoStack.value.push(data);
    });
  }, []);
  return /* @__PURE__ */ jsxDEV5("div", {
    className: painter_module_default.painterWrapper,
    children: [
      /* @__PURE__ */ jsxDEV5("div", {
        className: painter_module_default.row,
        children: [
          /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: /* @__PURE__ */ jsxDEV5(Label, {
              text: getImageName2(mode, translator),
              children: /* @__PURE__ */ jsxDEV5(BufferedInput, {
                disabled,
                className: painter_module_default.nameInput,
                placeholder: translate3("paint.painter.name", "name"),
                onSubmit: handleChangeName,
                value: imageName ? maybeTranslate(imageName) : getImageName2(mode, translator)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: [
              /* @__PURE__ */ jsxDEV5(Button2, {
                disabled: undoStack.value.length <= 1,
                className: classNames3(painter_module_default.button, painter_module_default.groupButtonFirst, {
                  [painter_module_default.groupButtonToggledOff]: disabled
                }),
                onClick: handleUndo,
                children: /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_undo_default,
                  className: painter_module_default.buttonIcon,
                  title: translate3("paint.painter.undo", "Undo")
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(Button2, {
                disabled: redoStack.value.length === 0,
                className: classNames3(painter_module_default.button, painter_module_default.groupButtonLast, {
                  [painter_module_default.groupButtonToggledOff]: disabled
                }),
                onClick: handleRedo,
                children: /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_redo_default,
                  className: painter_module_default.buttonIcon,
                  title: translate3("paint.painter.redo", "Redo")
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: mode === EditorModes.Costume && /* @__PURE__ */ jsxDEV5(Button2, {
              vertical: true,
              className: classNames3(painter_module_default.labelButton, {
                [painter_module_default.selected]: toolMode.value === PaintTools.Center
              }),
              onClick: useCallback7(() => toolMode.value = toolMode.value !== PaintTools.Center ? PaintTools.Center : null, []),
              children: [
                /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_center_default,
                  className: painter_module_default.buttonIcon,
                  title: translate3("paint.painter.center", "Center")
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsxDEV5(Text3, {
                  id: "paint.painter.center",
                  defaultMessage: "Center"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV5("div", {
        className: painter_module_default.row,
        children: [
          /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: /* @__PURE__ */ jsxDEV5(Label, {
              className: classNames3({
                [painter_module_default.disabled]: paintTool.value === PaintTools.Eraser || paintTool.value === PaintTools.Selector
              }),
              text: /* @__PURE__ */ jsxDEV5(Text3, {
                id: "paint.painter.fill",
                defaultMessage: "Fill"
              }, undefined, false, undefined, this),
              children: /* @__PURE__ */ jsxDEV5(ColorPicker, {
                picking: toolMode.value === PaintTools.ColorPicker || toolMode.value === PaintTools.OutlineColorPicker,
                color: fillColor.value,
                onChange: useCallback7((val) => fillColor.value = val, []),
                onPickingColor: wrapPickingColor(PaintTools.ColorPicker)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: classNames3(painter_module_default.toolGroup, painter_module_default.dashedBorder),
            children: [
              /* @__PURE__ */ jsxDEV5(Label, {
                className: classNames3({
                  [painter_module_default.disabled]: outlineDisabled.value
                }),
                text: /* @__PURE__ */ jsxDEV5(Text3, {
                  id: "paint.painter.outline",
                  defaultMessage: "Outline"
                }, undefined, false, undefined, this),
                children: /* @__PURE__ */ jsxDEV5(ColorPicker, {
                  outline: true,
                  picking: toolMode.value === PaintTools.ColorPicker || toolMode.value === PaintTools.OutlineColorPicker,
                  color: outlineColor.value,
                  onChange: useCallback7((val) => outlineColor.value = val, []),
                  onPickingColor: wrapPickingColor(PaintTools.OutlineColorPicker)
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(BufferedInput, {
                small: true,
                type: "number",
                className: classNames3(painter_module_default.largeInput, {
                  [painter_module_default.disabled]: outlineDisabled.value
                }),
                value: outlineWidth.value,
                onSubmit: handleOutlineWidthChange
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          penSizeEnabled.value && /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: [
              /* @__PURE__ */ jsxDEV5("img", {
                src: penSizeIcon,
                className: painter_module_default.toolIcon
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(BufferedInput, {
                small: true,
                type: "number",
                className: painter_module_default.largeInput,
                value: penSize.value,
                onSubmit: handlePanSizeChange
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          paintTool.value === PaintTools.Isogon && /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.toolGroup,
            children: [
              /* @__PURE__ */ jsxDEV5("img", {
                src: icon_isogon_default,
                className: painter_module_default.toolIcon
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(BufferedInput, {
                small: true,
                type: "number",
                className: painter_module_default.largeInput,
                value: isogonSides.value,
                onSubmit: handleIsogonEdgesChange
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV5("div", {
        className: classNames3(painter_module_default.row, painter_module_default.rowFill),
        children: [
          /* @__PURE__ */ jsxDEV5(ToolsBox, {
            small: smallToolsBox.value,
            paintTool: paintTool.value,
            onSelect: useCallback7((val) => paintTool.value = val, [])
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: painter_module_default.drawBoxWrapper,
            children: /* @__PURE__ */ jsxDEV5(DrawBox, {
              zoom: zoom.value,
              maxSize,
              toolOptions: {
                type: toolMode.value || paintTool.value,
                size: penSize.value,
                sides: isogonSides.value,
                color: fillColor.value,
                outlineWidth: outlineWidth.value,
                outlineColor: outlineColor.value,
                onPickColor: handlePickColor
              },
              onSizeChange: useCallback7((size2) => smallToolsBox.value = smallToolsBox.value ? size2.width < 390 : size2.width < 340, [])
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV5("div", {
        className: classNames3(painter_module_default.row, painter_module_default.rowBottom),
        children: [
          /* @__PURE__ */ jsxDEV5("div", {
            children: mode === EditorModes.Backdrop && /* @__PURE__ */ jsxDEV5(Button2, {
              disabled: true,
              className: painter_module_default.tileMapButton,
              children: [
                /* @__PURE__ */ jsxDEV5("img", {
                  className: painter_module_default.buttonLeftIcon,
                  src: icon_tilemap_default
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsxDEV5(Text3, {
                  id: "paint.mode.tileMap",
                  defaultMessage: "Convert to TileMap"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            children: [
              /* @__PURE__ */ jsxDEV5(Button2, {
                disabled: zoom.value === 1,
                className: classNames3(painter_module_default.button, painter_module_default.groupButtonFirst),
                onClick: useCallback7(() => zoom.value - ZOOM_STEP >= 1 && (zoom.value = zoom.value - ZOOM_STEP), []),
                children: /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_zoom_out_default,
                  className: painter_module_default.buttonIcon
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(Button2, {
                disabled: zoom.value === 1,
                className: classNames3(painter_module_default.button, painter_module_default.groupButton),
                onClick: useCallback7(() => zoom.value = 1, []),
                children: /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_zoom_reset_default,
                  className: painter_module_default.buttonIcon
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV5(Button2, {
                disabled: zoom.value === ZOOM_MAX,
                className: classNames3(painter_module_default.button, painter_module_default.groupButtonLast),
                onClick: useCallback7(() => zoom.value + ZOOM_STEP < ZOOM_MAX && (zoom.value = zoom.value + ZOOM_STEP), []),
                children: /* @__PURE__ */ jsxDEV5("img", {
                  src: icon_zoom_in_default,
                  className: painter_module_default.buttonIcon
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// packages/paint/src/components/paint-editor/paint-editor.module.css
__inject_style___default(".TDnbAa_pixel-editor-wrapper{background:var(--ui-white);border-radius:inherit;flex-grow:1;display:flex}");
var paint_editor_module_default = { pixelEditorWrapper: "TDnbAa_pixel-editor-wrapper" };

// packages/paint/src/components/paint-editor/paint-editor.jsx
import { jsxDEV as jsxDEV6 } from "preact/jsx-dev-runtime";
function PaintEditor({ mode, maxSize, onImagesFilter, onShowLibrary, onSurprise, onChange, onDelete }) {
  return /* @__PURE__ */ jsxDEV6("div", {
    className: paint_editor_module_default.pixelEditorWrapper,
    children: [
      /* @__PURE__ */ jsxDEV6(Selector, {
        mode,
        maxSize,
        onImagesFilter,
        onShowLibrary,
        onSurprise,
        onChange,
        onDelete
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV6(Painter, {
        mode,
        maxSize
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// packages/paint/src/components/tab/paint-tab.jsx
import { Text as Text4 } from "@blockcode/core";

// packages/paint/src/components/tab/icon-paint.svg
var icon_paint_default2 = "./assets/icon-paint-fcmp1zp4.svg";

// packages/paint/src/components/tab/paint-tab.jsx
import { jsxDEV as jsxDEV7 } from "preact/jsx-dev-runtime";
var paintTab = {
  icon: icon_paint_default2,
  label: /* @__PURE__ */ jsxDEV7(Text4, {
    id: "paint.painter.image",
    defaultMessage: "Image"
  }, undefined, false, undefined, this)
};
export {
  paintTab,
  loadImageFromURL,
  loadImageFromFile,
  loadImageFromAsset,
  PaintEditor,
  EditorModes,
  BlankImageData
};
