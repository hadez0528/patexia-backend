import { TagStylesTypeV2 } from '@/components';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TagVariantTypeV2 } from './variants';

export const getTagStylesV2 = (COLORS: {
  [key: string]: { [key: string]: string };
}): TagStylesTypeV2<TagVariantTypeV2> => {
  return {
    [TagVariantTypeV2.DEFAULT]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_100,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
        height: SIZES.size_200,
        width: SIZES.size_200,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        overflow: 'hidden',
        white_space: 'nowrap',
        text_overflow: 'ellipsis',
      },
    },
  };
};
