declare global {
  interface Window {
    ep: any;
    epSubs: any;
  }
  const ETUtils: any;
}

export const initPipa = (initCallback: () => void) => {
  window.ep = window.ep || [];

  window.ep.push(
    ['config', 'www.theepochtimes.com'], // set site_id
    ['url', [window.location.href]], // set the url parameter in 'Pages' of PIPA experience plan
    ['config', 'dataDestination', 'web_event_data'],
    ['config', 'GAID', 'UA-10465455-30'],
    ['init', initCallback],
  );
};