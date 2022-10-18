/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTimelineProps, TdTimelineItemProps } from './type';
import { PropType } from 'vue';

export const TimelineProps = {
  /** class样式 */
  className: {
    type: String as PropType<TdTimelineItemProps['className']>,
    default: '',
  },
  /** 时间轴信息位置 */
  labelAlign: {
    type: String as PropType<TdTimelineProps['labelAlign']>,
    default: '',
  },
  /** 时间轴方向 */
  layout: {
    type: String as PropType<TdTimelineProps['layout']>,
    default: 'vertical',
  },
  /** 标签与内容文本的位置关系 */
  mode: {
    type: String as PropType<TdTimelineProps['mode']>,
    default: 'alternate',
  },
  /** 时间轴是否表现为倒序 */
  reverse: {
    type: Boolean as PropType<TdTimelineProps['reverse']>,
    default: false,
  },
  /** 步骤条风格 */
  theme: {
    type: String as PropType<TdTimelineProps['theme']>,
    default: 'default',
  },
};

export const TimelineItemProps = {
  /** class样式 */
  className: {
    type: String as PropType<TdTimelineItemProps['className']>,
    default: '',
  },
  /** 时间轴颜色，内置 `primary/warning/error/default` 四种色值，可传入 16 进制颜色码或 RGB 颜色值. */
  dotColor: {
    type: String as PropType<TdTimelineItemProps['dotColor']>,
    default: 'primary',
  },
  /**
   * 标签信息相对于时间轴的位置，在 `mode='alternate'` 时生效，优先级高于 `Timeline.labelAlign`
   */
  labelAlign: {
    type: String as PropType<TdTimelineItemProps['labelAlign']>,
    default: '',
  },
  /**
   * 是否处在加载状态
   */
  loading: {
    type: Boolean as PropType<TdTimelineItemProps['loading']>,
    default: false,
  },
  /**
   * 标题
   */
  label: {
    type: String as PropType<TdTimelineItemProps['label']>,
    default: '',
  },
};
