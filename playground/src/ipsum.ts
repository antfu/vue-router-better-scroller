export const fullText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, eros et lacinia vulputate, tellus nunc faucibus elit, ac vehicula quam est at dolor.

Phasellus commodo dapibus orci, nec aliquam diam condimentum sed. Vestibulum in ante neque. Ut in justo viverra, auctor lectus id, condimentum velit. Donec scelerisque pulvinar dolor sit amet aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 

Aliquam in nisl nec elit molestie sodales. Curabitur ut tempor libero. Nullam fermentum, elit eu malesuada luctus, justo risus malesuada lacus, in luctus metus arcu dictum ex. Vestibulum posuere, diam sed sodales vestibulum, ligula arcu pharetra neque, ac semper nibh ipsum quis ipsum. Proin semper volutpat lorem quis feugiat. 

Mauris vulputate et nisl vel tempus. Cras id nunc a dui ullamcorper fermentum quis nec sem. Suspendisse potenti. Mauris volutpat, diam quis molestie consectetur, velit lacus ultricies orci, quis viverra nunc enim sit amet ligula.

Donec molestie cursus ultricies. Mauris rhoncus, odio ac dapibus vulputate, ipsum nibh rhoncus elit, interdum volutpat ipsum quam non lectus. 

Vivamus gravida scelerisque rutrum. Suspendisse malesuada mauris tortor, lacinia venenatis est pulvinar sit amet. Donec vel enim ut eros mollis efficitur sit amet a lorem. Praesent euismod turpis arcu, nec consequat ligula interdum eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus odio vitae mauris gravida aliquam. Praesent mi sem, congue ut dolor non, sagittis posuere eros.

Fusce feugiat nulla id nisl faucibus, eu interdum orci sollicitudin. In vitae sodales nibh, quis lacinia purus.

Curabitur porta lacus est, et dignissim eros gravida eget. Vivamus tincidunt lorem ut mauris ultrices feugiat. Donec maximus pretium eros. Proin auctor lorem a lectus facilisis, vel venenatis ipsum auctor. 

Maecenas viverra, eros vitae posuere ornare, velit odio malesuada turpis, luctus sodales nisi lectus eget mi. 

Nulla vitae diam vel quam pharetra condimentum. Suspendisse tempor luctus vehicula. Vivamus accumsan fermentum erat sit amet maximus. Phasellus pulvinar, odio at efficitur elementum, augue libero cursus erat, nec tempor libero nisi ac tellus. Nunc rhoncus a enim nec finibus. Aenean ut metus dapibus, fermentum nibh ut, posuere dui.

Nullam ac leo nisi. Curabitur non nulla non tortor rhoncus pharetra eget sed diam. Aliquam tincidunt libero a tortor viverra condimentum. Cras tellus justo, facilisis non dui sit amet, sagittis tristique massa. Aliquam suscipit finibus lectus in euismod. Nunc elementum metus ac purus luctus porta. Sed nisl neque, laoreet a ante a, molestie interdum orci. Nunc consequat nibh est, quis dictum est dictum in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget leo lorem.

Ut cursus congue leo et finibus. Proin ornare lectus elementum sodales rhoncus. Curabitur lorem magna, suscipit sit amet erat id, pharetra vulputate dui. Duis ac volutpat eros. Vestibulum aliquam augue libero, a dapibus turpis pretium eu. Phasellus massa sapien, mollis nec ultricies in, rhoncus in ligula. Donec feugiat leo vitae tellus dictum scelerisque. Aenean vitae porta elit. Donec purus libero, hendrerit eget finibus eu, tristique hendrerit ipsum. Integer dolor arcu, elementum luctus consectetur id, convallis quis lectus. Vivamus et odio sit amet massa consectetur iaculis quis nec mi. Fusce eleifend vitae ipsum finibus consequat. Sed volutpat libero sed erat pretium fermentum. Quisque vel efficitur urna.
`

export const paragraphs = (`${fullText}\n${fullText}`).split(/\n+/g).filter(Boolean)
  .map((t, idx) => `${idx + 1} ${t}`)
