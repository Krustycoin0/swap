import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'krusty',
  fromChain: 137,
  fromToken: '0x386C126Edf2013A0f146BDe8dF1b67D93e2ACE90',
   logoURI: 'https://i.postimg.cc/T3DWSPJ5/IMG-20230509-182205.jpg',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};



export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};
