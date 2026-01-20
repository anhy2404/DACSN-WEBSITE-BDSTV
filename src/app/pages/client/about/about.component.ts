import { Component } from '@angular/core';
import { Abount } from '../../../utils/abount-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  AboutData: any = Abount
  title: string = 'Bún nước lèo';
  imageUrl: string = 'https://vietflavour.com/wp-content/uploads/2018/12/bun-nuoc-leo.jpg';
  description: string = `Đây là món ăn khá phổ biến của các tỉnh miền Tây thế nhưng bún nước lèo Trà Vinh nhờ vào nguyên liệu độc đáo đã trở thành món bún nước lèo ngon nhất nhì miệt thứ. Bún nước lèo Trà Vinh nổi tiếng nhờ được nấu bằng mắm bò hóc. Một tô bún nghi ngút khói với miếng heo quay dai béo, cá lóc và nấm rơm ngọt thơm ăn kem rau ghém làm người ta cứ muốn ăn mãi không thôi.
Về nguyên liệu mắm bò hóc, người Trà Vinh dùng các loại cá đồng thịt ngọt ít xương trộn cùng gia vị và cơm nguội. 
Nén chặt trong hũ kín rồi cất kỹ hơn nửa năm là đã có thể đem ra nấu nước lèo.
Món ăn pha trộn giữa văn hóa ẩm thực 3 vùng miền Kinh – Hoa – Khmer này đã thu hút biết bao du khách dừng chân và ăn cho tận mặt một tô bún nước lèo Trà Vinh.`;
}
