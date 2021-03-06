<!DOCTYPE html>
<html lang="ua">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
<style>
.modal {
    display: block!important;
    overflow: scroll!important;
}
.calkil2 .modal-dialog {
    width: auto!important;
    margin: 0px auto;
}

h1{font-family: 'Roboto Condensed'!important;}
</style>
 <div class="modal calkil2 " id="calkil" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

   
    <div class="modal-body">
    <img class="flowerRightPosition" src="10.png" />
    <div class="alert alert-danger" id="ticket_land_error" style="display:none" role="alert">
    <div class="container">
    <div class="alert-icon">
    <i class="now-ui-icons objects_support-17"></i>
    </div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
    <div id="ticket_error_data">
    </div>
    </div>
    </div>

<main>
  <div class="intro text-center">
<h1 class="intro__heading" style="color:#353537">Калькулятор розрахунку вартості дизайн-проекту</h1>
<p class="text-left" style="margin-top:30px">Ми маємо досить тривалий досвід у створенні і реалізації дизайну інтер'єрів у життя. Ми створили калькулятор, який дозволяє нам виконати деякі підрахунки і допомогти Вам зорієнтуватися в ціновій політиці, а так само мати уявлення про вартість майбутнього ремонту.
</p>
  </div>
 <!-- Блок калькуля !ОБЯЗ! -->
  <div id="calculator">
<!-- START поля "Тип помещения" -->
<!-- Блок поля с id="calc-field__[id поля]" !ОБЯЗ! -->
<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__room-type">
<!-- Тайтл поля (для отправки в битрикс) !ОБЯЗ! -->
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Виберіть тип приміщення</h2>
<!-- Необязательно. Просто показываю, что можно оборачивать как хочешь -->
<div class="field-values room-type-field">
    <!--
<input id="[id поля]__[id значения]"
все пропы обязательны
  -->
    <input type="radio" class="toggle-calc" name="room-type" id="room-type__flat" value="room-type__flat" checked />
    <!-- Полуобязательно. Для того чтобы в битрикс нормально отправлялись данные надо label for="[id инпута ниже]" -->
    <label class="btn-calc" for="room-type__flat">Квартира</label>
    <input type="radio" class="toggle-calc" name="room-type" id="room-type__house" value="room-type__house" />
    <label class="btn-calc" for="room-type__house">Дім</label>
    <input type="radio" class="toggle-calc" name="room-type" id="room-type__cottage" value="room-type__cottage" />
    <label class="btn-calc" for="room-type__cottage">Котедж</label>
    <input type="radio" class="toggle-calc" name="room-type" id="room-type__office" value="room-type__office" />
    <label class="btn-calc" for="room-type__office">Офіс</label>
</div>
  </div>
    </div>
    <!-- END поля "Тип помещения" -->
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__construction-type">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Виберіть тип споруди</h2>
<div class="field-values construction-type-field">
    <input type="radio" class="toggle-calc" name="construction-type" value="construction-type__new" id="construction-type__new" checked />
    <label class="btn-calc" for="construction-type__new">Новобудова</label>
    <input type="radio" class="toggle-calc" name="construction-type" value="construction-type__old" id="construction-type__old" />
    <label class="btn-calc" for="construction-type__old">Старий фонд</label>
</div>
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__area-size">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Вкажіть загальну площу в м²</h2>
<input type="number" required="required" min="-9999" max="9999999999999" pattern="^[ 0-9]+$" class="area-size__input" id="area-size__input" />
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <div>
<h2 class="field-title">Не знаєте де знайти?</h2>
<a style="cursor:pointer" id="toggle-button1">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
<div class="section5 collapsible a collapsed">Якщо у Вас є планування, Ви зможете знайти зазначену площу в документації.</div>
  </div>
    </div>
</div>

<div class="calcul-field" id="calc-field__resident-number">
    <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Скільки кімнат?</h2>
    <input type="number" required="required" min="-9999" max="99" pattern="^[ 0-9]+$" class="resident-number-input" id="resident-number__input" />
</div>

<div class="calcul-field-images" id="calc-field__interior-style">
    <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Вкажіть бажаний стиль дизайну</h2>
    <div class="field-values-images">
    <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__minimal" id="interior-style__minimal" />
<label class="btn-image" for="interior-style__minimal">
    <div class="btn-inp">
  Мінімалізм
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__loft" id="interior-style__loft" />
 <label class="btn-image" for="interior-style__loft">
    <div class="btn-inp">
  Лофт
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__kantri" id="interior-style__kantri" />
<label class="btn-image" for="interior-style__kantri">
    <div class="btn-inp">
    Кантрі
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__ekostyle" id="interior-style__ekostyle" />
<label class="btn-image" for="interior-style__ekostyle">
    <div class="btn-inp">
    Еко-стиль
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__modern" id="interior-style__modern" />
<label class="btn-image" for="interior-style__modern">
    <div class="btn-inp">
  Модерн
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__contemporary" id="interior-style__contemporary" />
<label class="btn-image" for="interior-style__contemporary">
    <div class="btn-inp">
  Контемпорарі
    </div>
</label>
  </div>
  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__scandinavian" id="interior-style__scandinavian" />
<label class="btn-image" for="interior-style__scandinavian">
    <div class="btn-inp">
  Скандинавський
    </div>
</label>
  </div>

  <div class="image-field">
<input type="radio" class="tg-image" name="interior-style" value="interior-style__hz" id="interior-style__hz" checked />
<label class="btn-image" for="interior-style__hz">
    <div class="btn-inp">
  Не візначився/<br>Потрібна порада
    </div>
</label>
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__threed">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Потрібна 3-D візаулізація інтер'єру?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="threed" value="threed__yes" id="threed__yes" />
    <label class="btn-calc" for="threed__yes">Так</label>
    <input type="radio" class="toggle-calc" name="threed" value="threed__no" id="threed__no" checked />
    <label class="btn-calc" for="threed__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Навіщо потрібна візуалізація?</h2>
  <a style="cursor:pointer" id="toggle-button2">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible b collapsed">3D-візуалізація покликана вирішити найбільш важливі і інтригуючі моменти при створенні інтер'єру. Вона дозволяє побачити задумане до скоєння фатальних помилок. Як приклад поширеної помилки, є підбір кольорів і відтінків в інтер'єрі. Дуже часто, кожен бажаний колір окремо виглядає відмінно, але в інтер'єрі вони або напружують очі, або відбирають всю увагу й "тиснуть" своєю надкількістю.
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__equip-materials">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Потрібна допомога з комплектацією будівельних матеріалів?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="equip-materials" value="equip-materials__yes" id="equip-materials__yes" />
    <label class="btn-calc" for="equip-materials__yes">Так</label>
    <input type="radio" class="toggle-calc" name="equip-materials" value="equip-materials__no" id="equip-materials__no" checked />
    <label class="btn-calc" for="equip-materials__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Як ми можемо допомогти?</h2>
  <a style="cursor:pointer" id="toggle-button3">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible c collapsed">У будівництві ми вже більше 10 років і встигли випробувати практично будь-які матеріали. Такий досвід дозволяє нам ручатися за якість обраних і рекомендованих матеріалів. Але, крім досвіду, ми співпрацюємо з виробниками і офіційними представниками великих брендів: Grohe, Hansgrohe, Legrand, Kerama-marazzi, Sherwin-williams і ін. Вони надають нам партнерську знижку на матеріали. А ми з радістю ділимося цією знижкою з Вами
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__equip-furniture">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Потрібна допомога з комплектацією меблів?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="equip-furniture" value="equip-furniture__yes" id="equip-furniture__yes" />
    <label class="btn-calc" for="equip-furniture__yes">Так</label>
    <input type="radio" class="toggle-calc" name="equip-furniture" value="equip-furniture__no" id="equip-furniture__no" checked />
    <label class="btn-calc" for="equip-furniture__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Як ми можемо допомогти?</h2>
  <a style="cursor:pointer" id="toggle-button4">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible d collapsed">У створених нами проектах інтер'єру, ми завжди використовуємо тільки реальні меблі і можемо допомогти з логістикою. Допоможемо замовити, доставимо на об'єкт.
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__design-control">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Хочете, щоб дизайнер особисто проконтролював реалізацію інтер'єру?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="design-control" value="design-control__yes" id="design-control__yes" />
    <label class="btn-calc" for="design-control__yes">Так</label>
    <input type="radio" class="toggle-calc" name="design-control" value="design-control__no" id="design-control__no" checked />
    <label class="btn-calc" for="design-control__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Навіщо це потрібно?</h2>
  <a style="cursor:pointer" id="toggle-button5">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible e collapsed">
Дизайнер - творча людина, а будівельник - представник точних і конкретних дій.
                         Часто трапляється, що будівельник не намагається навіть зануритися в задум автора проекту, що в підсумку може вплинути на підсумковий результат.
                         Для цього існує послуга "Авторський нагляд", коли автор проекту особисто контролює його втілення і може вчасно втрутитися, якщо будівельники вирішили "схалтурити".
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__builder-control">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Хочете, щоб ми проконтролювали роботу Вашого підрядника або прийняли у нього роботи?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="builder-control" value="builder-control__yes" id="builder-control__yes" />
    <label class="btn-calc" for="builder-control__yes">Так</label>
    <input type="radio" class="toggle-calc" name="builder-control" value="builder-control__no" id="builder-control__no" checked />
    <label class="btn-calc" for="builder-control__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Навіщо це потрібно?</h2>
  <a style="cursor:pointer" id="toggle-button6">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible f collapsed">
Без особливих навичок, вкрай важко компетентно приймати виконану майстрами роботу. На жаль, багато майстрів любителі виконувати замовлення за принципом: І так зійде, а якщо людина не бачить, то і переробляти не доведеться. І на всі Ваші заперечення з легкістю і авторитетно спробують переконати Вас, що це єдине вірне рішення. У таких ситуаціях, дуже добре мати поряд досвідченого майстра, який аргументує протилежне і простежить, щоб всі роботи були виконані якісно.
  </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="calcul-field" id="calc-field__repair">
<h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Потрібен ремонт?</h2>
<div class="field-values">
    <input type="radio" class="toggle-calc" name="repair" value="repair__yes" id="repair__yes" />
    <label class="btn-calc" for="repair__yes">Так</label>
    <input type="radio" class="toggle-calc" name="repair" value="repair__no" id="repair__no" checked />
    <label class="btn-calc" for="repair__no">Ні</label>
</div>
  </div>
    </div>
    <div class="col-md-6 col-sm-12">
  <h2 class="field-title"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="15" height="15" fill="#E5AD3E"/>
</svg>
 Навіщо це потрібно?</h2>
  <a style="cursor:pointer" id="toggle-button7">Детальніше <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#353537"/>
</svg>
</a>
  <div class="section5 collapsible g collapsed">
Через часті проблеми з підрядними організаціями, ми давно вже зрозуміли, що як би якісно не був складений проект, але краще підконтрольних особистих бригад ніхто не зможе його реалізувати. Саме за тим же принципом, що будівельники не люблять морочитися або надавати значення деталям, які і формують затишок у Вашому домі</div>
    </div>
</div>
  </div>

  <button id="calculate-button" type="button" class="btn btn-primary">Отримати розрахунки</button>
  <!-- Результаты расчетов -->
  <div id="calculator-result">
<div class="row">
    <div class="col-md-6 col-sm-12">
  <div class="result-tariff-full">
<div>
    <h3>Вам підходить наш спеціальний тариф</h3>
    <div id="tariff-name"></div>
</div>
<div>
    <h3>Вартість розробки</h3>
    <div id="tariff-price"></div>
    <div id="tariff-price-custom" style="font-style:italic">У Вас більше 100м ². У таких випадках, ми настійно рекомендуємо обговорити всі деталі з нашим провідним дизайнером, в тому числі і вартість такого проекту.</div>
</div>
  </div>
  <div class="result-tariff-empty">
<div>
    <h3>Почніть заповнювати необхідні поля, щоб з'явився розрахунок</h3>
</div>
  </div>
  <div>
<h3>Строк розробки дизайн проекту:</h3>
<div class="deadline">33 дні*</div>
  </div>
  <div class="result-repair">
<h3>Вартість ремонту</h3>
<div id="repair-pricce">
    <span class="repair-with-old-fund">
  <span id="repair-price"></span> + 
  <span class="repair-old-fund">
<span id="repair-old-fund-price"></span>
<sup>
    <small style="color:red">*</small>
</sup>
  </span> = 
    </span>
    <span id="result-repair-total-usd"></span>&nbsp;
    (<span id="result-repair-total-grn"></span>)
</div>
<h4>
    Розрахунок ремонту: вартість чорнових матеріалів, вартість чорнових робіт, вартість чистових матеріалів і вартість чистових робіт, без меблів.
</h4>
<h4 class="repair-with-old-fund">
    <sup>
  <small style="color:red">*</small>
    </sup>
   7% приблизна вартість::&nbsp;
    <em>за вивезення сміття і демонтаж та інші заходи, пов'язані з ремонтом у старому фондом</em>
</h4>
  </div>
  <div class="total-result">
<h3>Підсумок</h3>
<div>
    <h4>
  <span id="total-price-grn"></span>
    </h4>
</div>
  </div>
</div>
<div class="col-md-6 col-sm-12">
  <div class="contr" style="background: #0f4c81;">
<h3 style="color:white">Замовити розробку дизайну</h3>
<form class="mainticketForm text-center ml-auto mr-auto" onsubmit="ym(54166075, 'reachGoal', 'calc'); return true;" method="post" id="formalie" accept-charset="UTF-8">
    <div class="input-group input-lg">
    <input type="hidden" name="DATA[TITLE]" value="<?php echo $idform.' '; ?>от">
    <input type="text" name="DATA[NAME]" class="form-control" placeholder="Ім'я.." style="color: white;background: transparent;border-color: white;">
    </div>
    <div class="input-group input-lg">
    <input type="number" required="required" min="-9999" style="color: white;background: transparent;border-color: white;" max="9999999999999" pattern="^[ 0-9]+$" name="DATA[PHONE_WORK]" class="form-control" placeholder="Телефон..">
    </div>
    <br>
    <div class="textarea-container">
    <textarea type="hidden" class="form-control" name="DATA[COMMENTS]" style="color: white;background: transparent;border-color: white;" rows="4" cols="80" placeholder="Ваш коментар..."></textarea>
    </div>
    <input type="hidden" id="dialogtype" name="dialogtype" value="">
    <div class="send-button" style="margin-top:1em;text-align: center;">
    <button type="submit" value="Send" class="btn btn-primary">Відправити заявку</button>
    <p style="padding-top: 1rem;color:white">*Ми не передаємо Ваші дані третім особам</p>
    </div>
    </form>
</div>
    </div>
  <div class="col-md-12" style="margin-top:30px">
  <div id="tariff-offer">
<div class="tariff-offer-custom">
    <div class="contr">
 <h2> Хочемо порадити Вам наш тариф <b style="color:#0f4c81">Good Idea</b>. </h2>
  <h3>У чому різниця?</h3>  
     Даний тариф містить 3D-візуалізацію Вашого простору. Такий підхід допоможе Вам завчасно переконатися у вірності підібраних колірних рішень, а також, ліпше розуміти підсумкову картинку майбутнього інтер'єру. І вчасно внести необхідні правки. Адже, як відомо, переробляти дорожче ...
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Замовити Good Idea</a>
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-outline-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Консультація з провідним дизайнером</a></div>
</div>
<div class="tariff-offer-template" id="offer-idea-tmpl">
    <div class="contr">
 <h2> Хочемо порадити Вам наш тариф <b style="color:#0f4c81">Good Idea</b>. </h2>
 <h2> Вартість розробки становитиме: <span class="contr-tariff-price" id="good_idea-tariff-price"></span></h2>
  <h3>У чому різниця?</h3>  
     Даний тариф містить 3D-візуалізацію Вашого простору. Такий підхід допоможе Вам завчасно переконатися у вірності підібраних колірних рішень, а також, ліпше розуміти підсумкову картинку майбутнього інтер'єру. І вчасно внести необхідні правки. Адже, як відомо, переробляти дорожче ...
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Замовити Good Idea</a>
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-outline-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Консультація з провідним дизайнером</a></div>
</div>
<div class="tariff-offer-template" id="offer-good_idea-tmpl">
    <div class="contr">
  <h2> Хочемо порадити Вам наш тариф <b style="color:#0f4c81">Good Idea Premium</b>. </h2>
  <h2> Вартість розробки становитиме: <span class="contr-tariff-price" id="good_idea_premium-tariff-price"></span></h2>
  <h3>У чому різниця?</h3>  
Даний тариф містить Авторський нагляд. Це дозволить Вам вносити корегування до затвердженого проекту, якщо у Вас раптом з'явилася нова цікава ідея.
                                 Ваш дизайнер особисто проконтролює виконання і реалізацію задуманого дизайну і вчасно втрутиться, якщо потрібні будуть правки або миттєві рішення.
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Замовити "Good Idea Premium"</a></div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-outline-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Консультація з провідним дизайнером</a></div>
</div>
<div class="tariff-offer-template" id="offer-good_idea_premium-tmpl">
    <div class="contr">
 <h2> Хочете дешевше? - Чи можемо порадити Вам наш Тариф <b>Good Idea</b></h2>
  <h2> Вартість розробки становитиме: <span class="contr-tariff-price" id="good_idea-tariff-price"></span></h2>
   <h3>У чому різниця?</h3>  
Даний тариф не містить Авторський нагляд. Авторський нагляд дозволить Вам вносити коригування до затвердженого проекту, якщо у Вас раптом з'явилася нова цікава ідея.
                                 Ваш дизайнер особисто проконтролює виконання і реалізацію задуманого дизайну і вчасно втрутиться, якщо потрібні будуть правки або миттєві рішення.
    </div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Замовити "Good Idea"</a></div>
    <div class="col-md-6 col-sm-12 text-center"><a href="#" class="btn btn-outline-primary animated fadeInLeft" style="animation-delay: 0.9s;" data-toggle="modal" data-target="#ticketModal"><svg version="1.1"focusable="false" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 8.8" style="fill:white" xml:space="preserve"><path  d="M9.8,5L6.4,2c-0.3-0.3-0.8,0-0.8,0.4v1.7c-3,0-4.3-0.8-3.4-3.6c0.1-0.3-0.3-0.6-0.5-0.4C0.8,0.7,0,1.9,0,3.1 c0,3,2.5,3.6,5.6,3.6v1.6c0,0.4,0.5,0.6,0.8,0.4l3.4-3C10.1,5.5,10.1,5.1,9.8,5z"/> </svg> Консультація з провідним дизайнером</a></div>
    </div>
</div>
  </div>
</div>
    </div>
<link href="/calc/custom.css" rel="stylesheet" type="text/css">
<link href="/calc/bootstrap.css" rel="stylesheet" type="text/css">
<link href="/calc/global.css" rel="stylesheet" type="text/css">
  <script src="/calc/main.js"></script>
  <?php include("form3.php");?>
    </main>
    </div>
    </div>

</body>
</html>

