<!-- Included on all landing pages for print, digital, ETV, and magazines -->

<style>
  #header .container .links .desktop .wrapper{
    font-weight: 300;
    width: 708px;
    max-width: 100%;
    margin: auto;
    padding-top: 9px;
    text-align: left;
    display: flex;
    justify-content: space-around;
  }

  #header .container .links div {
    width: auto;
  }

  #header .container .links div a {
    border-bottom: none;
    font-size: 26px;
  }

  #header .container .links .current a {
    font-weight: bold;
    color: #3F90FF;
    border-bottom: 2px solid #3F90FF;
    padding-bottom: 3px;
  }

  #header .divider {
    box-sizing: border-box;
    height: 27px;
    border: 0.8px solid #979797;
  }

  #header .links .desktop div.gift {
    padding-left: 30px;
    margin-top: 5px;
  }

  #header .links .desktop div.gift a {
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 23.09px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }

  #header .gift #gift-icon {
    height: 23px;
    width: auto;
    padding-right: 5px;
  }

  #header .links .gift a:hover {
    background-color: #FFC300;
    border: 1px solid #FFC300;
  }

  #header .mobile {
    display: none !important;
  }

  #header .desktop {
    display: flex !important;
  }

  @media screen and (max-width: 816px) {
    #header .container .links {
      padding-top: 0;
      height: fit-content;
    }

    #header .container .links .mobile {
      display: block !important;
      width: 100%;
      height: fit-content;
    }

    #header .desktop {
      display: none !important;
    }

    #header .container .links .current a {
      padding-bottom: 0;
      border-bottom: none;
    }

    #header .menu-content {
      background-color: #fff;
      font-family: inherit;
    }

    #header .menu-content ul {
      margin: 0;
    }

    #header .menu-content ul li {
      font-family: inherit;
      border-bottom: 1px solid #979797;
      font-size: 24px;
      line-height: 44px;
      color: #1A8FFF;
      font-weight: bold;
    }
    
    #header .menu-content ul li a {
      padding-left: 37px;
      display: flex;
      align-items: center;
    }

    #header .collapsible-menu {
      position: sticky;
    }
    #header .collapsible-menu label {
      height: 44px;
      background-color: rgba(26,143,255,0.1);
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    #header .collapsible-menu label #expand-down {
      margin-left: 12px;
    }
    #header .collapsible-menu ul {
      list-style-type: none;
      padding: 0;
    }
    #header .collapsible-menu a {
      display: block;
      height: 44px;
      text-decoration: none;
    }
    #header input#menu {
      display: none;
    }
    #header .menu-content {
      max-height: 0;
      overflow: hidden;
    }/* Toggle Effect */
    #header input:checked ~ .menu-content {
      max-height: 100%;
    }
  }

  .dropdown {
    float: left;
    /* overflow: hidden; */
    padding-bottom: 10px;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 240px;
    z-index: 1;
    margin-top: 10px;
    border: 1px solid #979797;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.26);
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a grey background color to dropdown links on hover */
  #header .container .links .dropdown-content a:hover {
    color: #1A8FFF;
    font-weight: bold;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>

<div class="links">
  <div class="desktop">
    <div class="wrapper">
      <div class="print <?php if($current === 'print') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=general">Print</a></div>
      <div class="divider"></div>
      <div class="digital <?php if($current === 'digital') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=digitalsub">Digital</a></div>
      <div class="divider"></div>
      <div class="epochtv <?php if($current === 'epochtv') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=epochtvsub" target="_newtab">Epoch TV</a></div>
      <div class="divider"></div>
      <div class="magazine dropdown <?php if($current === 'magazine') { echo 'current';} ?>"><a href="#">Magazine</a>
        <div class="dropdown-content">
          <a href="https://www.readepochinsight.com" target="_newtab">INSIGHT</a>
          <a href="https://americanessence.net" target="_newtab">American Essence</a>
        </div>
      </div>
    </div>
    <div class="gift <?php if($current === 'gift') { echo 'current';} ?>">
      <a href="https://readepoch.com/gift">
        <img src="./shared/common/assets/gift_icon.png" alt="gift" id="gift-icon">
        Gift
      </a>
    </div>
  </div>
  <div class="mobile">
    <div class="collapsible-menu">
      <input type="checkbox" id="menu">
      <label for="menu">
        Click to see more products
        <img src="./shared/common/assets/arrow_down.png" alt="gift" id="expand-down">
      </label>
      <div class="menu-content">
          <ul>
              <li><div class="print <?php if($current === 'print') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=general">Print</a></div></li>
              <li><div class="digital <?php if($current === 'digital') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=digitalsub">Digital</a></div></li>
              <li><div class="epochtv <?php if($current === 'epochtv') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=epochtvsub">Epoch TV</a></div></li>
              <li><div class="insight <?php if($current === 'insight') { echo 'current';} ?>"><a href="https://www.readepochinsight.com">INSIGHT Magazine</a></div></li>
              <li><div class="ae <?php if($current === 'ae') { echo 'current';} ?>"><a href="https://americanessence.net">American Essence Magazine</a></div></li>
              <li><div class="gift <?php if($current === 'gift') { echo 'current';} ?>"><a href="https://readepoch.com/gift">Gift</a></div></li>
          </ul>
      </div>
    </div>
  </div>
</div>