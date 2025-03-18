https://lolinfo-page.vercel.app/
->배포용 페이지 입니다(작성일 기준 19일 오전 11시까지 api키가 유요해서 일부 페이지가 동작하지 않을수도 있습니다)

src/page.tsx -> 프로젝트 실행시 가장 처음 보이는 메인 페이지 입니다. 디자인이 기존 프로젝트들에 비해 상당히 잘 나왔는데 그 이유는 구글링 해서 템플릿을 가져왔기 때문입니다.

src/layout.tsx -> 가장 상위에서 영향을 미치는 레이아웃입니다. Header에는 네비게이션 바를 생성하고 Footer에는 프로젝트에 어울리는 문구를 공유받아서 사용했습니다.

src/app/api/rotation/route.ts -> riot api를 활용하여 챔피언 로테이션을 불러오는 로직입니다. api응답 값은 챔피언들의 식별자(number)를 반환해줍니다. 그렇기때문에  fetchChampionListSSR함수를 호출하여 다시 필터링하여 실제 챔피언 정보를 리턴해주게 됩니다.

src/app/champions/champion.page.tsx -> 해당 페이지의 경우 ISR로 작성하는것이 요구 사항이였기에 fetchChampionList에 revalidate속성을 추가하였고, 스탠다드 반에서 배운 프리패치를 사용해보고자 page.tsx를 생성하여 HydrationBoundary컴포넌트로 감쌌습니다. 

src/app/champions/[id]/page.tsx -> chamioncard컴포넌트를 클릭하게 되면 영웅의 상세 정보 페이지 입니다. useParams로 챔피언의 식별자를 받아오고 fetchChampionDetail함수를 호출하여 각각의 이미지를 생성후 렌더링을 하게 됩니다. 가장 디자인이 예쁘게된 페이지 입니다.(당연히 템플릿을 활용한겁니다.)

src/app/items/item.page.tsx -> fetchItemList에 fore-cache옵션을 명시적으로 하여 ssg렌더링이 되도록 구현하였습니다. itemcard컴포넌트의 경우 championcard를 재활용하여 만들었습니다. 만들고 나서 들었던 생각은 아이템과 챔피언을 따로 두는게 아니라 그냥 commoncard로 이름을 만들어 반복되는 코드를 줄이는것도 좋았을걸 이라는 생각이 들었습니다.

src/app/rotation/page.tsx -> 전박적인 외형은 champion페이지와 크게 다르지 않습니다. 라우트핸들러 사용과 isr로 구현이 요구 사항이였기에 위에서 말씀드린것과 같이 route.ts를 별도로 생성하였습니다. 라우트 핸들러를 사용하기 위해 get()이런식으로 호출하면 되는 줄 알았는데 아니였어서 다시 강의를 보고 작성했던거 같습니다. 자세한 후기는 til에 작성이 되어있습니다



notice: 검은 화면으로 봐야지 의도한 디자인으로 보실수있습니다. 다크모드로 진행한것이 아닌 pc자체의 다크모드 때문에 바탕이 검은색으로 노출됩니다. vscode확장팩인 inline fold를 사용하시면 코드의 가독성이 상승합니다.


메인 페이지
<img width="765" alt="스크린샷 2025-03-18 오후 4 50 36" src="https://github.com/user-attachments/assets/61f29377-1107-40fe-a7f8-043a070151fe" />
<img width="759" alt="스크린샷 2025-03-18 오후 4 50 45" src="https://github.com/user-attachments/assets/c01cd1fe-81e0-43ef-8038-c9f8ff857372" />

챔피언 정보 페이지
<img width="759" alt="스크린샷 2025-03-18 오후 4 50 55" src="https://github.com/user-attachments/assets/9cc9478e-78fb-4727-a167-2d34dfaf06d8" />

아이템 페이지
<img width="746" alt="스크린샷 2025-03-18 오후 4 51 03" src="https://github.com/user-attachments/assets/8804068a-05f9-49bd-9b2c-235270a8adce" />

챔피언 로테이션 페이지
<img width="775" alt="스크린샷 2025-03-18 오후 4 51 31" src="https://github.com/user-attachments/assets/7cd48f7b-9609-45ec-9e85-5cdf31f18409" />

챔피언 세부 정보 페이지
<img width="765" alt="스크린샷 2025-03-18 오후 4 51 39" src="https://github.com/user-attachments/assets/306157b5-4507-41a5-8bc9-44d8ab6671ce" />
