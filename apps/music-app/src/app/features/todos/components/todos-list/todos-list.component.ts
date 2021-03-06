import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../../../core/models/Todo';

@Component({
  selector: 'music-apps-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[] = [];

  @Output() select = new EventEmitter<Todo>();

  constructor() {}

  trackFn(index: number, item: Todo) {
    return item.id;
  }

  ngOnInit(): void {}
}
