using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                cancellationToken.ThrowIfCancellationRequested();
                var activity = await _context.Activities.FindAsync(new object[] { request.Id }, cancellationToken: cancellationToken);
                if(activity == null) return null;
                _context.Remove(activity);
                var result = await _context.SaveChangesAsync(cancellationToken);
                return result > 0 ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failed to delete activity");
            }
        }
    }
}