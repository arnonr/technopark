<template>
  <div>
    <!-- Topbar -->
    <div id="topbar" class="d-none d-xl-block d-lg-block topbar-fullwidth">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <!--Logo-->
            <div id="logo">
              <a href="index.html">
                <span class="logo-default">
                  <img
                    class="img-logo float-left"
                    src="/images/iconwebtechnopark/logo.png"
                    alt="อุทยานเทคโนโลยี มจพ."
                  />
                </span>
                <!-- <span class="logo-dark">
                  <img
                    class="img-logo"
                    src="/images/iconwebtechnopark/logo.png"
                    alt="โลโก้อุทยานเทคโนโลยี มจพ."
                /></span> -->
              </a>
            </div>
            <div style="margin-top: 2.2rem">
              <h4 class="d-inline">
                อุทยานเทคโนโลยี
                <br />
              </h4>
              <h5 class="d-inline">
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
              </h5>
            </div>
            <!--End: Logo-->
          </div>
          <!-- <div class="col-md-6 d-none d-sm-block">
            <div class="social-icons social-icons-colored-hover">
              <ul>
                    <li><a href="#"></a></li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- Header -->
    <header id="header" data-fullwidth="true">
      <div class="header-inner">
        <div class="container">
          <!--Logo-->
          <div id="logo" class="d-block d-sm-none">
            <a href="index.html">
              <span class="logo-default">
                <img
                  class="img-logo"
                  src="/images/iconwebtechnopark/logo.png"
                  alt="อุทยานเทคโนโลยี มจพ."
                  style="width: 80px"
                />
              </span>
            </a>
          </div>
          <!--End: Logo-->

          <!--Navigation Resposnive Trigger-->
          <div id="mainMenu-trigger">
            <a class="lines-button x"> <span class="lines"></span> </a>
          </div>
          <!--end: Navigation Resposnive Trigger-->
          <!--Navigation-->
          <div id="mainMenu">
            <div class="container">
              <nav class="d-flex justify-content-center">
                <ul>
                  <li class="nav-menu-first">
                    <NuxtLink to="/"> หน้าหลัก </NuxtLink>
                  </li>
                  <li class="dropdown">
                    <a href="#">หลักสูตร</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">อยู่ระหว่างการพัฒนา</a></li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a href="#">CWIE</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">ระบบฐานข้อมูลสหกิจศึกษา</a></li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a href="#">งานบริการวิชาการและนวัตกรรม</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">อยู่ระหว่างการพัฒนา</a></li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a href="#">เกี่ยวกับเรา</a>
                    <ul class="dropdown-menu">
                      <li>
                        <NuxtLink to="/about/1">
                          <i class="fa fa-info-circle"></i> ความเป็นมา
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/about/2">
                          <i class="fa fa-info-circle"></i>
                          ปรัชญา/ปณิธาน/วิสัยทัศน์
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/about/3">
                          <i class="fa fa-sitemap"></i>
                          โครงสร้างองค์กร
                        </NuxtLink>
                      </li>
                      <li>
                        <a href="#"> <i class="fa fa-users"></i>บุคลากร</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/about/4">
                      ติดต่อเรา
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!--end: Navigation-->
        </div>
      </div>
    </header>
    <!-- end: Header -->
  </div>
</template>
