 {{!-- <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>/</th>
            <th>T1</th>
            <th>T2</th>
            <th>T3</th>
            <th>T4</th>
            <th>T5</th>
            <th>T6</th>
            <th>T7</th>
            <th>T8</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Día 1</td>
            {{#each dates as |date|}}

        
            {{#isApoimentToday date}}
            <th><button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#{{date.id}}"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {{date.date}}
                {{date.turn}}
              </button></th>     
          {{/isApoimentToday}}  
            
          {{/each}} 

          </tr>
          <tr>
            <td>Día 2</td>
            {{#each dates as |date|}}

        
            {{#isApoimentTomorrow date}}
            <th><button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#{{date.id}}"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {{date.date}}
                {{date.turn}}
              </button></th>     
          {{/isApoimentTomorrow}}  
            
          {{/each}} 

          </tr>
      
        
        </tbody>

      </table>
    </div> --}}



{{!-- <div class="btn-group">
  <a href="/dates/list/confirmed" class="btn btn-primary">Volver atrás</a>
</div>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th></th>
      <th class="text-center">Turno 1</th>
      <th class="text-center">Turno 2</th>
      <th class="text-center">Turno 3</th>
      <th class="text-center">Turno 4</th>
      <th class="text-center">Turno 5</th>
      <th class="text-center">Turno 6</th>
      <th class="text-center">Turno 7</th>
      <th class="text-center">Turno 8</th>
    </tr>
  </thead>
  <tbody>
    {{#each dates as |date|}}
   
    <tr>
      <td>{{@key}}</td>
        {{#isApoimentToday date}}
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#{{date.id}}"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {{date.user.name}}
          </button>
        {{/isApoimentToday}}

      </td>
    </tr>
    <tr>
      <td>
        {{#isApoimentTomorrow date}}
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#{{date.id}}"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {{date.user.name}}
          </button>
        {{/isApoimentTomorrow}}

      </td>
    </tr>

  {{/each}}


  </tbody>
   --}}
</table>