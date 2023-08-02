<!-- Included on all landing pages for print, digital, ETV, and magazines -->

<style>
  #header .container .links .desktop{
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
    color: #D3114E;
    border-bottom: 2px solid #D3114E;
    padding-bottom: 3px;
  }

  #header .divider {
    box-sizing: border-box;
    height: 27px;
    border: 0.8px solid #979797;
  }

  #header .links .desktop div.regular a {
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 23.09px;
    padding: 0px 20px;
  }

  #header .links div.regular a:hover {
    background-color: #DDECFA;
    border: 1px solid #DDECFA;
  }

  #header .mobile {
    display: none !important;
  }

  #header .desktop {
    display: flex !important;
  }

  @media screen and (max-width: 708px) {
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
      background-color: #FFF3CD;
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
    overflow: hidden;
    padding-bottom: 10px;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 310px;
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

  #header .container .links .dropdown-content a:hover {
    color: #D3114E;
    font-weight: bold;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>

<div class="links">
  <div class="desktop">
    <div class="print <?php if($current === 'print') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=gift">Print Gift</a></div>
    <div class="divider"></div>
    <div class="digital <?php if($current === 'digital') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=digital-gift">Digital Gift</a></div>
    <div class="divider"></div>
    <div class="magazine dropdown <?php if($current === 'magazine') { echo 'current';} ?>"><a href="#">Magazine Gift</a>
      <div class="dropdown-content">
        <a href="https://subscribe.theepochtimes.com/p/?page=insight-gift" target="_newtab">INSIGHT Magazine</a>
        <a href="https://americanessence.net/gift" target="_newtab">American Essence</a>
        <!-- <a href="https://readradiantlife.com">Radiant Life</a> -->
      </div>
    </div>
    <div class="regular">
      <a href="https://readepoch.com">
        Subscribe
      </a>
    </div>
  </div>
  <div class="mobile">
    <div class="collapsible-menu">
      <input type="checkbox" id="menu">
      <label for="menu">
        Click to see more products
        <img src="./shared/common/assets/arrow_down.png" alt="down" id="expand-down">
      </label>
      <div class="menu-content">
          <ul>
              <li><div class="print <?php if($current === 'print') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=gift">Print Gift</a></div></li>
              <li><div class="digital <?php if($current === 'digital') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=digital-gift">Digital Gift</a></div></li>
              <li><div class="insight <?php if($current === 'insight') { echo 'current';} ?>"><a href="https://subscribe.theepochtimes.com/p/?page=insight-gift">INSIGHT Magazine</a></div></li>
              <li><div class="ae <?php if($current === 'ae') { echo 'current';} ?>"><a href="https://americanessence.net/gift" target="_newtab">American Essence Magazine</a></div></li>
              <li><div class="regular"><a href="https://readepoch.com">Subscribe</a></div></li>
          </ul>
      </div>
    </div>
  </div>
</div>